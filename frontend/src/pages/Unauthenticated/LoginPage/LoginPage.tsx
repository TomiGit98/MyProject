import "./LoginPage.scss"

import snap from "../../../images/snap.png";

export const LoginPage: React.FC = () => (
    <div className="login-page-container">
        <div className="d-none d-sm-flex login-page-container__login-component--pc">
            <p className="title-of-the-app">Login to Post It</p>
            <div className="login-component__symbol-container">
                <img src={snap} alt="logo"/>
            </div>
            <input placeholder="E-mail or username" className="shadow-sm" />
            <input placeholder="Password" className="shadow-sm" />
            <div className="forgot-password-container">
                <a href="/" className="forgot-password">Forgot your password?</a>
            </div>
            <div className="login-component__button-container--pc">
                <button className="">Sign-in</button>
            </div>
            <p className="registration-link">Don't have an account? <a href="/registration">Registration</a></p>
            <div className="login-component__footer-container--pc">
                <p className="copyright">&copy; 2022 Post It</p>
            </div>
        </div>
        <div className="d-flex d-sm-none login-page-container__login-component--mobile">
            <p className="title-of-the-app">Login to Post It</p>
            <div className="login-component__symbol-container">
                <img src={snap} alt="logo" />
            </div>
            <input placeholder="e-mail, username" className="shadow-sm" />
            <input placeholder="password"  className="shadow-sm" />
            <div className="forgot-password-container">
                <a href="/" className="forgot-password">Forgot your password?</a>
            </div>
            <div className="login-component__button-container--mobile">
                <button className="">Sign-in</button>
            </div>
            <p className="registration-link">Don't have an account? <a href="/registration">Registration</a></p>
            <div className="login-component__footer-container--mobile">
                <p className="copyright">&copy; 2022 Post It</p>
            </div>
        </div>
    </div>
);