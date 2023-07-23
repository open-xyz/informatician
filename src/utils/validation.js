
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$%#^&*])(?=.*[0-9]).{8,}$/;

const validate = {
    name: (value) => {
      if (!value) return { name: true, nameError: "Name field cannot be empty" };
      else {
        return value.trim().length < 6
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
        const numOfWords = value.trim().split(/\s+/).length;
    
        if(numOfWords < 10 || numOfWords > 100){
          return {message: true, messageError: "Describe your message in 10 to 100 words"}
        }else{
          return {message: false, messageError: false}
        }
      },

      bookName: (value)=>{
        const numOfWords = value.trim().split(/\s+/).length;
    
        if(numOfWords > 10){
          return {bookName: true, bookNameError: "Book title can contain maximum 10 words"}
        }
        else{
          return {bookName: false, bookNameError: false}
        }
      },

      authorName: (value)=>{
        const numOfWords = value.trim().split(/\s+/).length;
        if(numOfWords < 2)  return {authorName: true, authorNameError: "Add First Name and Last Name"}
        if(value.length > 40) return {authorName: true, authorNameError: "Name must be less than 40 characters"}
        return {authorName: false, authorNameError: false}
      },

      publisher: (value)=>{
        if(value.trim().length > 30) return {publisher: true, publisherError: "Publisher name must be less than 30 characterss"}
        return {publisher: false, publisherError: false}
      },

      pages: (value)=>{
          if(value.trim().length < 1) return {pages: true, pagesError: "Pages cannot be in negative number"}
          if(value > 100000) return {pages: true, pagesError: "Pages must be less than 100000"}
          return {pages: false, pagesError: false}
      },

      fName: (value)=>{
        return value.trim().length < 3
        ? { fName: true, fNameError: "First Name must be atleast 3 characters long." }
        : { fName: false, fNameError: false }
      },
      lName: (value)=>{
        return value.trim().length < 3
        ? { lName: true, lNameError: "Last Name must be atleast 3 characters long." }
        : { lName: false, lNameError: false }
      },
      userName :(value)=>{
        return value.trim().length < 6
        ? { userName: true, userNameError: "UserName must be atleast 6 characters long." }
        : {userName : false, userNameError: false }
      },
      pass: (value)=>{
        return passwordRegex.test(value)
          ? { pass: false, passError: false }
          : { pass: true, passError: "Minimum 8 characters, 1 uppercase, 1 lowercase, 1 symbol (@$%#^&*), 1 number (0-9)." }
      },
      confirmPass: (value, password)=>{
          return (value !== password)?
                 {confirmPass: true, confirmPassError: "Password does not match"}:
                 { confirmPass: false, confirmPassError: false }
      }   
}

export default validate;
