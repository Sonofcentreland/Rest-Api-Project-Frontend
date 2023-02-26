import { useEffect, useState } from "react"
import '../Pages Css/ShortFacts.css'
import axios from '../axios';
import Add from '../Icons/AddIcon.svg';
import Delete from '../Icons/DeleteIcon.svg';

export const ShortFacts = () => {
    const [Fact,setFact] = useState([]);
    const [Id,setId] = useState("");

    const getAllFact = () => {
        fetch("http://localhost:8080/shortfacts")
            .then((res) => res.json())
            .then((result) => {
                setFact(result);
                console.log(result);
            });
    };

    // const deleteFact = () => {
    //     axios.delete("/shortfact/",{id}, {
    //         id=
    //     }).then((res) => {
    //         console.log(res);
    //     })
    // }

    useEffect(() => {
        getAllFact();
    },[]);

    return(
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Nabla&display=swap');
            </style>
            <div className="ShortFact">
                <div className="ShortFactHeader">
                    <h5>SHORT FACTS</h5>
                </div>
                    {Fact.map((Fact) => {
                        return (
                            <div className="FullBorder">
                                <div className="ShortFactBorder">
                                    <div className="ShortFactTitle">
                                        <h3>{Fact.title}</h3>
                                    </div>
                                    <div className="ShortFactDesc">
                                        <p>{Fact.description}</p>
                                    </div>
                                </div>
                                <div className="ShortFactOptions">
                                    <div className="Edit">
                                        <img src={Add} alt="D"></img>
                                    </div>
                                    <div className="Delete">
                                        <img src={Delete} alt="D"></img>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
             </div>
        </>
    );
}