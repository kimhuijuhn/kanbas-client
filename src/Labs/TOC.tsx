import { Link } from "react-router";

export default function TOC() {
    return (
        <ul>
            <li> <Link to='/Kanbas'> KANBAS </Link></li>
            <li> <Link to='/Labs/Lab1'> LAB 1 </Link></li>
        </ul>
    );
}