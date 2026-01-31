export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label> <br/> <br/>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" rows={5} cols={45}>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br/><br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} /> 
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top"> 
                        <label htmlFor="wd-assignment-group"> Assignment Group </label>
                    </td>
                    <td>
                        <select>
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>PROJECTS</option>
                        </select> 
                    </td>
                </tr>
                    <td>
                        <label htmlFor="wd-display-grade-as"> Display Grade As</label>
                    </td>
                    <td>
                        <select>
                            <option> Online </option>
                        </select>
                    </td>
                <tr>
                    <td></td>
                    <td>
                        <input type='checkbox' id="entry-online-text" name="scales"/>
                        <label htmlFor="entry-online-text">Text Entry </label>
                    </td>
                </tr>
                                <tr>
                    <td></td>
                    <td>
                        <input type='checkbox' id="entry-online-url" name="scales"/>
                        <label htmlFor="entry-online-url">Website URL </label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type='checkbox' id="entry-online-url" name="scales"/>
                        <label htmlFor="entry-online-url"> Media Recordings </label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type='checkbox' id="entry-online-annotation" name="scales"/>
                        <label htmlFor="entry-online-annotation">Student Annotations</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type='checkbox' id="entry-online-file" name="scales"/>
                        <label htmlFor="entry-online-file"> File Uploads </label>
                    </td>
                </tr>
            </table>
        </div>
    );
}
