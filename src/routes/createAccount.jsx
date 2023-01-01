import { Link } from "react-router-dom";

function CreateAccount() {
    return (
        <div>
            <h1>You are at Create account page</h1>
            <ul>
                <li>
                    <Link to={"/home"}>Submit</Link>
                </li>
            </ul>
        </div>
    )
  }
  
  export default CreateAccount;
  