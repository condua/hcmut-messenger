import { useState } from "react";
import { auth } from "../firebase"; // Import Firebase auth từ file firebase.js
import { sendPasswordResetEmail } from "firebase/auth";
import './reset.css'

const Reset = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(auth,emalVal).then(data=>{
        alert("Check your gmail")
    }).catch(err=>{
        alert(err.code)
    })
}
return(
    <section className="Reset">
        <h1>Forgot Password</h1>
        <form className="reset-form" onSubmit={(e)=>handleSubmit(e)}>
            <input name="email" /><br/><br/>
            <button>Reset</button>
        </form>
    </section>
)
};

export default Reset;
