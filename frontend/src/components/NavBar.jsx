import { Link } from "react-router-dom";
import "../index.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand pl-5 fs-3" to={`/`}>
        Sistema Escolar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              className="nav-link fs-5 text-decoration-underline"
              to={`/profesores`}
            >
              Administrar Profesores
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fs-5 text-decoration-underline"
              to={`/estudiantes`}
            >
              Administrar Estudiantes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
