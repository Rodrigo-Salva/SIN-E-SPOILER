import React from 'react';

const Header = ({ section, onNav }) => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__wrapper d-flex a-items-center j-content-between">
          <a href="/" className="nav__logo">
            <h1 className="nav__title c-primary">Sin E Spoiler 🎬</h1>
          </a>
          <ul className="list list--menu d-flex g-4">
            <li className="list__item">
              <button
                className={`nav__link c-white btn btn--secondary${section === "movies" ? " btn--primary" : ""}`}
                onClick={() => onNav("movies")}
              >
                Movies
              </button>
            </li>
            <li className="list__item">
              <button
                className={`nav__link c-white btn btn--secondary${section === "coming-soon" ? " btn--primary" : ""}`}
                onClick={() => onNav("coming-soon")}
              >
                Coming Soon
              </button>
            </li>
            <li className="list__item">
              <button
                className={`nav__link c-white btn btn--secondary${section === "promotions" ? " btn--primary" : ""}`}
                onClick={() => onNav("promotions")}
              >
                Promotions
              </button>
            </li>
            <li className="list__item">
              <button
                className={`nav__link c-white btn btn--secondary${section === "contact" ? " btn--primary" : ""}`}
                onClick={() => onNav("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;