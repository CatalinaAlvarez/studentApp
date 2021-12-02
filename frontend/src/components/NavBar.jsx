import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand pl-5" to={`/`}>Sistema Escolar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                        <Link className="nav-link" to={`/profesores`} >Administrar Profesores</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={`/estudiantes`}>Administrar Estudiantes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default NavBar;