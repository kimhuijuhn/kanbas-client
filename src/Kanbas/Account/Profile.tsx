export default function Profile() {
    return (
        <div> 
            <h1> Profile </h1>
            <input className="username" placeholder="username" defaultValue="hjkim0209"/> <br/>
            <input className="password" placeholder="Password" defaultValue="asd123" type="password"/> <br/>
            <input id="firstname" placeholder="First Name" defaultValue="Huijuhn"/> <br/>
            <input id="lastname" placeholder="Last Name" defaultValue="Kim"/> <br/>
            
        </div>
    );
}