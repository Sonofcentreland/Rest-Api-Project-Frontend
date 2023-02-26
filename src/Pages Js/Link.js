import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './homepage';
import Signup from './Signup';
import Login from './Login';
import AddFact from './AddFact';
import { ShortFacts } from './ShortFacts';

function Link() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/addnew" element={<AddFact/>} />
                    <Route path="/shortfacts" element={<ShortFacts/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Link;