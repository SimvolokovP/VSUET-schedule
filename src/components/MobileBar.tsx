import { FC } from "react";
import { navLinks } from "../router";
import { NavLink } from "react-router-dom";

const MobileBar: FC = () => {
  return (
    <div className="mobile-bar">
      <ul className="list-reset">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              className={(e) =>
                e.isActive ? "mobile-bar__link active" : "mobile-bar__link"
              }
              to={link.path}
            >
              <link.icon size={25} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileBar;
