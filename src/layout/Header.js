import data from "../mock/header.json";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [show, setShow] = useState(false);
  let history = useHistory();
  useEffect(() => {
    const url = window.location;
    let body = document.getElementsByTagName("BODY")[0];
    switch (url.pathname) {
      case "/destination":
        body.classList.add("destination");
        break;
      case "/crew":
        body.classList.add("crew");
        break;
      case "/technology":
        body.classList.add("technology");
        break;
      default:
        body.classList.add("home");
        break;
    }
  });

  const handleRedirect = (name) => {
    setActive(name);
    if (name === "Home") {
      history.push(`/`);
    } else {
      history.push(`/${name.toLowerCase()}`);
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <header className="primary-header flex">
        <div>
          <img
            src="./assets/shared/logo.svg"
            alt="space tourism logo"
            className="logo"
          />
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          onClick={handleShow}
        >
          <span className="sr-only" aria-expanded={show}>
            Menu
          </span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible={show}
            className="primary-navigation underline-indicators flex"
          >
            {data.header.map((e) => (
              <li
                key={e.id}
                onClick={() => handleRedirect(e.name)}
                className={active === e.name ? "active" : ""}
              >
                <Link
                  className="ff-sans-cond uppercase text-white letter-spacing-2"
                  to={e.href}
                >
                  <span aria-hidden="true">{e.id}</span>
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
