import React, { useEffect, useState } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
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
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ):(          <button onClick={login}>LogIn With Google</button>)
}
</div>
  )
}

export default GooglePage;
