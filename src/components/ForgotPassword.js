import React from 'react';

function ForgotPassword() {
    return (
        <form>
            <h3>Reset Password</h3>
            <br/>
            <h10>Enter the email address associated with your account, and we’ll email you a link to reset your password.</h10>

            <br/>
            <br/>
            <br/>

            <div className="form-group">
                <label>Email address</label>
            </div>

            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter Email" />
            </div>

            <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Send Reset Link</button>
            </div>

        </form>
    );
}

export default ForgotPassword;