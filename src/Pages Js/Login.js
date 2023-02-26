import { useState } from 'react';
import axios from '../axios';
import '../Pages Css/Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Login = () => {
        axios.get("/login", {
            params:{
                username: username,
                password: password
            }
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
            <div className='LoginBody'>
                <div className='LoginBox'>
                    <div className='LoginContent'>
                        <div className='LoginTitle'>
                            <h2>SHORT FACTS</h2>
                            <p>Sign Up to create an account and<br />contribute your facts</p>
                        </div>
                        <div className='LoginInputs'>
                            <input onChange={(e) => setUsername(e.target.value)} className='LoginUsername' placeholder='Username'></input>
                        </div>
                        <div className='LoginInputs'>
                            <input onChange={(e) => setPassword(e.target.value)} className='LoginPassword' placeholder='Password'></input>
                        </div>
                        <div className='LoginButton'>
                            <button className='LoginButton' onClick={Login}>LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;