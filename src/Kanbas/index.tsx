import Account from "./Account";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kanbas() {
    return (
        <div id='kanbas'>
            <h1> KANBAS </h1>
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <KanbasNavigation/>
                        </td>
                        <td valign="top">
                            <Routes>
                                <Route path="/" element={<Navigate to="account"/>}/>
                                <Route path="/account/*" element={<Account/>} /> 
                                <Route path="/dashboard/*" element={<Dashboard/>}/>
                                <Route path="/Courses/:cid/*" element={<Courses />} />
                                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                                <Route path="/Inbox" element={<h1>Inbox</h1>} />
                            </Routes>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

