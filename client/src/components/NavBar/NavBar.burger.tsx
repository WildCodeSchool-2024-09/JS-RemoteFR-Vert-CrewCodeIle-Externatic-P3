import { Link } from "react-router-dom";
import type { NavbarBurgerProps } from "../../lib/navbar.definition";

const NavBarBurger = ({
  isOpenMenu,
  handleIsOpenedMenu,
  links,
}: NavbarBurgerProps) => {
  const renderedLinks = links.map((link) => (
    <li className="list-none" key={link.href}>
      <a href={link.href} onClick={handleIsOpenedMenu}>
        {link.label}
      </a>
    </li>
  ));

  const renderedConnexionLinks = (
    <div className="flex flex-row gap-4">
      <Link
        to="/login"
        className="flex items-center justify-center my-2 px-4 py-2 rounded-md btn-accent hover:bg-gray-800 hover:text-white transition duration-300 text-center"
      >
        Connexion Candidat
      </Link>
      <Link
        to="/login"
        className="flex items-center justify-center my-2 px-4 py-2 rounded-md btn-accent hover:bg-gray-800 hover:text-white transition duration-300 text-center"
      >
        Connexion Entreprise
      </Link>
    </div>
  );

  return (
    <section>
      {isOpenMenu && (
        <section>
          <ul className="flex flex-col gap-2 mr-2">{renderedLinks}</ul>
          {renderedConnexionLinks}
        </section>
      )}
    </section>
  );
};

export default NavBarBurger;
