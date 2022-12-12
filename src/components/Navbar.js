import React, { useState } from "react";

const List = () => {
  return (
    <ul className="socialmedia">
      <li className="socialmedia-item">
        <button>the first</button>
      </li>
      <li className="socialmedia-item2">
        {" "}
        <button>the second</button>
      </li>
    </ul>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  open === true ? console.log("true") : console.log("false");

  return (
    <div>
      <nav className="NavLine">
        <button onClick={() => setOpen(!open)}>Dropdown</button>
        {open && <List />}
        {open ? (
          <div className="mylinks">My social media links</div>
        ) : (
          <div>click here for social media</div>
        )}
      </nav>
    </div>
  );
}
