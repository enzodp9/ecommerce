import { useState } from "react";
import "./header.css";

const Header = () => {
    const [login, setLogin] = useState(false);

    const loginAccount = () => {
        setLogin(!login);
    }

    return (
        <header>
            <nav>
                <div className="brand">
                    <a href="/"><img className="logo" src="assets/logo.svg" alt="logo" /></a>
                    <input className="search" type="text" placeholder="Que deseas buscar?" />
                </div>
                {!login ? <div className="login">
                    <button className="login-btn" type="submit" onClick={loginAccount}>Login</button>
                </div> :
                    <div className="login">
                        <button className="logout-btn" type="submit" onClick={loginAccount}>Logout</button>
                    </div>
                }

            </nav>
        </header>
    )
}
export default Header;