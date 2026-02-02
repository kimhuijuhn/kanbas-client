import { Link } from "react-router";
import "../../index.css"

export default function Signin() {
    return (
        <div id='signin'>
            <h2 id='signin-title'> Sign In </h2>
            <input placeholder="ID"/> <br/>
            <input placeholder="Password" type="password"/> <br/>
            <Link to="/kanbas/dashboard" className="sign-in"> Sign In </Link> <br/>
            <Link to="/kanbas/account/signup" className="sign-in">Sign Up </Link>
        </div>
    );
}