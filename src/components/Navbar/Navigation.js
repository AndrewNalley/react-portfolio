import React, { useState } from "react";
import { Nav, NavLink, NavMenu }
    from "./NavElements";

function Navigation() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to="/Resume" activeStyle>
                        Resume
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}
// code here
export default Navigation;
