import "./index.css"

export default function Lab2() {
    return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>

      <p className="test">
        This paragraph has...
        <ul>
          <li> a bit of margin and border </li>
          <li> border has rounded corner </li>
          <li> font family is monospace </li>
          <li> line height is 1.5em </li>
        </ul>
      </p>

      <div className="selector-1">
        this is a div with the className as <b> .selector-1. </b> 
        <span className="selector-2"> this is a span with className selector-2.</span>
        <span className="selector-3"> within the div, we have this paragraph with the className <b>.selector-3.</b> </span>  
        <div className="selector-4"> 
          but this one is <b>.selector-4</b>. 
          Because the style specified an immediate hierarchy,
          This paragraph does not turn into light grey.

          <div className="selector-3">
            <span className="selector-4">
              But this one does.
            </span>
          </div>
        </div>
      </div>
    </div>
    );
}