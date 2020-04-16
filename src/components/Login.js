import React from 'react';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <form>
            <h3>Login</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="username" className="form-control" placeholder="Enter Username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </div>

            <p className="forgot-password text-right">
                <Link to="/reset">Forgot password?</Link>
            </p>
        </form>
    );
}

export default Login;