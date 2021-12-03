import React, { useState,useEffect } from 'react';
import "bootswatch/dist/lumen/bootstrap.min.css";
import StudentService from '../../services/StudentService';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import GradeList from '../notas/GradeList'


function MoreInfoStudent (){

    const {id} = useParams();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [level, setLevel] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if(id){
            StudentService.get(id)
                .then(student => {
                    setName(student.data.name);
                    setLastName(student.data.lastName);
                    setLevel(student.data.level);
                    setEmail(student.data.email);
                    setPhone(student.data.phone);
            })
            .catch(error => {
                console.log('Hubo un error', error)
            })
        }
        },[])

    return (
        <div className="container">
        <br/>
        <h2 className="mt-5">Estudiante {name} {lastName}</h2>
        <hr/>
        <h3 className="pb-3">Datos</h3>
        <div>
            <table className= "table table-bordered table-striped">
            <thead className ="thead-dark">
                <tr>
                <td>Documento</td>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>Grado</td>
                <td>Correo</td>
                <td>Teléfono</td>
                <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{level}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                    <Link to={`/estudiantes/editar/${id}`} className="btn btn-success">Modificar</Link>
                </td>
                </tr>                
            </tbody>
            </table>
        <hr/>
        <h3 className="pb-3">Notas</h3>
        <GradeList></GradeList>
        </div>
        <Link to={`/estudiantes`}>Volver a la lista</Link>
        </div>

    );
}

export default MoreInfoStudent;