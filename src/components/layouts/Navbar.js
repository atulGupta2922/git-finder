import React from "react";
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar bg-primary">
                <h2>
                    <i className={props.icon}></i> {props.title}
                </h2>
            </nav>
        </div>
    );
}

Navbar.defaultProps = {
    title: 'Git finder',
    icon: 'fa-solid fa-bug'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;