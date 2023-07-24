import React, { useEffect, useState } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import GoogleLogo from "../../assets/googleLogo.png";
import axios from 'axios';
import WelcomeUser from './Welcomeuser';
const  GooglePage = ({SetisLoggedIn}) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      setUser(JSON.parse(userJSON));
    }
  }, []);
  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
            console.log(res.data);
          setProfile(res.data);
          SetisLoggedIn(true);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(res.data));
          console.log(localStorage.getItem("user"))
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
    SetisLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove the login status from localStorage
    localStorage.removeItem('user');
  };

  return (
    <div>
      {profile ? (
        <div >
          <WelcomeUser user={profile} />
          <br />
        
          <button
  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
  onClick={logOut}
>
  Log out
</button>
        </div>
      ):(         
      <button className="w-[100%] flex justify-center items-center gap-2 bg-red-600 text-white px-4 py-2 shadow-md rounded-md cursor-pointer"onClick={login}>
      Login with Google{" "}
      <img src={GoogleLogo} alt="" className="h-6 w-6" />
    </button>)
}
</div>
  )
}

export default GooglePage;
