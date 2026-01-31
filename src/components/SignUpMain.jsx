import React from "react";
import signUpImg from "../assets/SignUpPhoto.png";
import "/src/styles/SignUpMain.css";

function SignUpMain() {
  return (
    <main className="signup-main-container">
      <div className="left-side-main">
        <img
          src={signUpImg}
          alt="Shopping Illustration"
          className="signup-image"
        />
      </div>

      <div className="right-side-main">
        <div className="signup-content">
          <div className="text-section-main">
            <h1>Create an account</h1>
            <p>Enter your details below</p>
          </div>

          <form className="inputs-main">
            <input type="text" placeholder="Name" className="signup-input" />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
            />

            <button type="submit" className="btn-create">
              Create Account
            </button>

            <button type="button" className="btn-google">
              <img
                src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                alt="Google"
                width="20"
              />
              Sign up with Google
            </button>
          </form>

          <div className="signup-account-login">
            <span>Already have account?</span>
            <a href="/login" className="login-link">
              Log in
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUpMain;
