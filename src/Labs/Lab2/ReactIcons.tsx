import { BsCalendar } from "react-icons/bs";

export default function ReactIcons() {
    return (
        <div>
            <h2> React Icons </h2>
            <BsCalendar/> Calendar Icons <br/>
            <BsCalendar style={{backgroundColor: "black", color: "white"}}/> Calendar Icon inverted <br/>
            <BsCalendar style={{margin: "10px"}} /> Cal Icon with 10px margin <br/>

            <BsCalendar id="test-calendar" className="animated-button"/>
            
        </div>
    )
}