import imagen from '../assets/error404quees.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="container">
            <div>
                <h3 className="text-center mt-5 mb-4">La página que buscabas no se encuentra disponible</h3>
            </div>
            <div>
                <img className="img-home mx-auto d-block" src={imagen} width= "600" height= "400" alt="Página no encontrada" />
            </div>
            <div className="text-center mt-3">
                <Link to={`/`}>Volver</Link>
            </div>
        </div>
     );
}
 
export default NotFound;