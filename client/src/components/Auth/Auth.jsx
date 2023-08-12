import React from "react";

const Auth = () => {
  return (
    <div className="authentication-container">
      <div className="sign-up-container">
        <form action="" method="post" className="sing-up-form" id="signUpForm">
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="input-field"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                id="name"
                className="input-field"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="input-field"
                name="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="input-field"
                name="confirm-password"
              />
            </div>
            <div className="form-btn-container">
              <button type="reset" className="form-btn reset-btn">Reset</button>
              <button type="submit" className="form-btn submit-btn">Sign up</button>
            </div>
          </div>
        </form>
      </div>
      <div className="sign-in-container">
        <form
          action=""
          method="post"
          className="sing-in-form"
          id="signInForm"
        ></form>
      </div>
    </div>
  );
};

export default Auth;
