import { useState } from 'react';
import axios from '../axios';
import '../Pages Css/Signup.css'

function Signup() {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignUp = () => {
        axios.post("/newuser", {
            username: username,
            yourname: fullname,
            mailId: email,
            password: password
        }).then((res) => {
            console.log(res);
        })
    }
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Nabla&display=swap');
            </style>
            <div className='SignupBody'>
                <div className='SignupBox'>
                    <div className='SignupContent'>
                        <div className='SignupTitle'>
                            <h2>SHORT FACTS</h2>
                            <p>Sign Up to create an account and<br />contribute your facts</p>
                        </div>
                        <div className='SignupInputs'>
                            <input onChange={(e) => setUsername(e.target.value)} className='SignupUsername' placeholder='Username'></input>
                        </div>
                        <div className='SignupInputs'>
                            <input onChange={(e) => setFullname(e.target.value)} className='SignupName' placeholder='Full Name'></input>
                        </div>
                        <div className='SignupInputs'>
                            <input onChange={(e) => setEmail(e.target.value)} className='SignupMailId' placeholder='Enter your Email Id'></input>
                        </div>
                        <div className='SignupInputs'>
                            <input onChange={(e) => setPassword(e.target.value)} className='SignupPassword' placeholder='Password'></input>
                        </div>
                        <div className='SignupInputs'>
                            <input className='SignupPassword' placeholder='Confirm Password'></input>
                        </div>
                        <div className='SignupButton'>
                            <button className='SignupButton' onClick={SignUp}>SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;