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
          <li> font is </li>
          <li> 10px padding on left and top </li>
          <li> Line height is 0.6em.</li>
        </ul>
      </p>
    </div>
    );
}