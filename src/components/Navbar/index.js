import React, { useState } from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

function Navigation() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activestyle>
                        Home
                    </NavLink>
                    <NavLink to="/contact" activestyle>
                        Contact
                    </NavLink>
                    <NavLink to="/projects" activestyle>
                        Blogs
                    </NavLink>
                    <NavLink to="/resume" activestyle>
                        Resume
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navigation;
