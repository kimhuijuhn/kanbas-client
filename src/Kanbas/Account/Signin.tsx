import { Link } from "react-router";

export default function Signin() {
    return (
        <div id='signin'>
            <h2 id='signin-title'> Sign In </h2>
            <input placeholder="ID"/> <br/>
            <input placeholder="Password" type="password"/> <br/>
            <Link to="/kanbas/account/profile"> Sign In </Link> <br/>
            <Link to="/kanbas/account/signup">Sign Up </Link>
        </div>
    );
}