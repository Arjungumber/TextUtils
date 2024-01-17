import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
    {/* making it template literal becz class hume as a variable dalni thi */}
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item ">
          {/* here a as been change to link tag and its attribute href has been changed to 'to' so that our router can work properly. */}
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'? 'dark': 'light'}`}> 
        {/* using the ternary condition becz agr mode dark h to text light and  */}
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

// setting the proptypes of both the props, not nesessary but avoids the future errors that could happen
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}; // isRequired make it mandatory to have the title
// so if we do not send the title as prop and if we do not have default props set , we will get the error
// default props are used when the props are not passed by any of the reason.
Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About Text here",
};
