import  { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    // <>
      <nav>
        <div className="logo">Shraaa's restaurant</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <button
        className="hamburger"
        onClick={() => setShow(!show)}
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu />
      </button>
      </nav>
    // </>
  );
};

export default Navbar;