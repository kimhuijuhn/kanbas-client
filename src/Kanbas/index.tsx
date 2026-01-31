import Account from "./Account";
import { Routes, Route, Navigate } from "react-router";

export default function Kanbas() {
    return (
        <div id='kanbas'>
            <p> Welcome to KANBAS! </p>
            <Routes>
                <Route path="/" element={<Navigate to="account"/>}/>
                <Route path="/account/*" element={<Account/>} />
            </Routes>
        </div>
    );
}

