import React, { useState } from "react";

function Navigation() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <a href="#portfolio" role="button" className="secondary">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" role="button" className="secondary">
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1s-cFFvgDVXacxeHFOLWv4atzeLtoByBnQx--7XlKWt8/edit?usp=sharing"
            role="button"
            className="secondary"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
    </div>
  );
}
// code here
export default Navigation;
