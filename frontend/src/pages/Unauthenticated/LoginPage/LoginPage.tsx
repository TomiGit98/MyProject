import "./LoginPage.scss"

export const LoginPage: React.FC = () => (
    <div className="login-page-container">
        <div className="d-none d-sm-flex login-page-container__login-component--pc">
            <p className="title-of-the-app">Login to Post It</p>
            <input placeholder="e-mail, username" />
            <input placeholder="password" />
            <div className="forgot-password-container">
                <a href="/" className="forgot-password">Forgot your password?</a>
            </div>
            <div className="login-component__button-container--pc">
                <button className="">Sign-in</button>
            </div>
            <p className="registration-link">Don't have an account? <a href="/">Registration</a></p>
            <p className="copyright">&copy; 2022 PostIt</p>
        </div>
        <div className="d-flex d-sm-none login-page-container__login-component--mobile">
            <p className="title-of-the-app">Login to Post It</p>
            <input placeholder="e-mail, username" />
            <input placeholder="password" />
            <div className="forgot-password-container">
                <a href="/" className="forgot-password">Forgot your password?</a>
            </div>
            <div className="login-component__button-container--mobile">
                <button className="">Sign-in</button>
            </div>
            <p className="registration-link">Don't have an account? <a href="/">Registration</a></p>
            <p className="copyright">&copy; 2022 PostIt</p>
        </div>
    </div>
);