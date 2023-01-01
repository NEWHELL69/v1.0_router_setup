import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>You are at Home page</h1>
            <ul>
                <li>
                    <Link to={"/search"}>search</Link>
                </li>
                <li>
                    <Link to={"/accounts"}>accounts</Link>
                </li>
                <li>
                    <Link to={"/chat"}>chat</Link>
                </li>
                <li>
                    <Link to={"/sell"}>sell dashboard</Link>
                </li>
            </ul>
        </div>
    )
  }
  
  export default Home;
  