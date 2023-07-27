// ----Auth Message ----//

export const AuthErrorMessage = ({message})=>{
  return   <div className="flex justify-center">
  <p className="text-red-500 m-2 text-center w-72 text-sm">{message}</p>
</div>
}


// ----Email Validation----//

const emailRegex = /^\w+([\.-]?\w+)*@(gmail\.com|yahoo\.com|hotmail\.com|aol\.com|outlook\.com)$/;

export const validate = {
    name: (value) => {
      if (!value) return { name: true, nameError: "Name field cannot be empty" };
      else {
        return value.length < 6
          ? { name: true, nameError: "Name must be atleast 6 characters long." }
          : { name: false, nameError: false }
      }
    },
    email: (value) => {
        return emailRegex.test(value)
          ? { email: false, emailError: false }
          : { email: true, emailError: "Please enter a valid email address" }
      },
    message: (value)=>{
        const numOfWords = value.split(" ").length;
    
        if(numOfWords < 10 || numOfWords > 100){
          return {message: true, messageError: "Describe your message in 10 to 100 words"}
        }else{
          return {message: false, messageError: false}
        }
      },
}

