import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";

export default function Account() {
    return (
        <div id='account'>
            <h1>Account</h1>
            <Routes>
                <Route path="/" element={<Navigate to="/kanbas/account/signin"/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </div>
        
    );
}