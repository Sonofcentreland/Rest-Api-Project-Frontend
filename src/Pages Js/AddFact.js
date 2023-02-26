import { useState } from 'react';
import axios from '../axios';
import '../Pages Css/AddFact.css'

function AddFact() {
    const [Title,setTitle] = useState("");
    const [Description,setDescription] = useState("");
    const [Author,setAuthor] = useState("");

    const AddFact = () => {
        axios.post("/shortfacts", {
            name:Author,
            title:Title,
            description:Description
        }).then((res) => {
            console.log(res);
        })
    }

    return(
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Nabla&display=swap');
            </style>
            <div className='AddFactBody'>
                <div className='AddFactBox'>
                    <div className='AddFactContent'>
                        <div className='AddFactTitle'>
                            <h2>SHORT FACTS</h2>
                            <p>Sign Up to create an account and<br />contribute your facts</p>
                        </div>
                        <div className='AddFactInputs'>
                            <input className='AddFacttitleName' onChange={(e) => setTitle(e.target.value)} placeholder='Add Title'></input>
                        </div>
                        <div className='AddFactInputs' id='AddFactDesc'>
                            <textarea className='AddFactDesc' onChange={(e) => setDescription(e.target.value)} placeholder='Add Description'></textarea>
                        </div>
                        <div className='AddFactInputs'>
                            <input className='AddFactAuthor' onChange={(e) => setAuthor(e.target.value)} placeholder='Add Author'></input>
                        </div>
                        <div className='AddFactButton'>
                            <button className='AddFactButton' onClick={AddFact} >ADD FACT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddFact;