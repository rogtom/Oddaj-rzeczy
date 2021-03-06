import React from "react";
import SignOutLinks from "./SignOutLinks";
import SignInLinks from "./SignInLinks";
import { Link } from "react-scroll";
import { connect } from 'react-redux'





const Nav = (props) => {
    // console.log(props.auth);

    const links = !props.auth.isEmpty ? <SignInLinks /> : <SignOutLinks />

    return (
        <div className="nav-wrapper">
            { links }
            <div className="site-nav">
                <ul>
                    <li>
                            <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                            className="current"
                        >Start</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section-2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className=""
                        >
                            O co chodzi?
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="about-us"
                            smooth={true}
                            offset={0}
                            duration={500}
                            className=""
                        >
                            O nas
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="whoGetHelp"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className=""
                        >
                            Fundacje i organizacje
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className=""
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Nav)