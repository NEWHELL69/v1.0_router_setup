import { Link } from "react-router-dom";

function Intro() {
    return (
        <div>
            <h1>You are at Intro page</h1>
            <ul>
                <li>
                    <Link to={"login"}>login</Link>
                </li>
                <li>
                    <Link to={"createAccount"}>create an account</Link>
                </li>
            </ul>
        </div>
    )
  }
  
  export default Intro;
  