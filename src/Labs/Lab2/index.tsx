import "./index.css"
import Float from "./Float";
import StyleHierarchy from "./StyleHierarchy";
import Style from "./Style";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIcons from "./ReactIcons";
import BootstrapExercise from "./BootstrapExercise";

export default function Lab2() {
    return (
    <div id="wd-lab2" style={{margin: '12px'}}>
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <Style/> <br/> <br/>
      <StyleHierarchy/> <br/> <br/>
      <Float/> <br/> <br/>
      <GridLayout/> <br/> <br/>
      <Flex/> <br/> <br/>
      <ReactIcons/> <br/> <br/>
      <BootstrapExercise/>
    </div>
    );
}