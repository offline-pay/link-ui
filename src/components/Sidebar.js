import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              Offline Pay
            </Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <i className="nc-icon nc-circle-09"></i>
                <p>User Profile</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/link'>
                <i className="nc-icon nc-money-coins"></i>
                <p>LinkPay</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/pageeditor'>
                <i className="nc-icon nc-money-coins"></i>
                <p>PageEditor</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/emaileditor'>
                <i className="nc-icon nc-email-85"></i>
                <p>EmailEditor</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar