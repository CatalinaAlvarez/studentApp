import React, { useState } from "react";
import { useHistory } from "react-router";
import StudentService from "../../services/StudentService";
import { Link } from 'react-router-dom';


const AddStudent = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [level, setLevel] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [sendAlert, setSendAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const history = useHistory();
    const alfaNumericRE = /[A-Za-z0-9_]/;
    const emailRE = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;


    const saveStudent = (e) =>{
        e.preventDefault();

        const student = {id,name, lastName, level, email, phone};

        if (!alfaNumericRE.test(student.name)) {
            setSendAlert(true);
            setAlertMessage("Por favor complete el nombre con caracteres alfanuméricos");
        }else if(!alfaNumericRE.test(student.lastName)){
            setSendAlert(true);
            setAlertMessage("Por favor complete el apellido con caracteres alfanuméricos");
        }else if(!emailRE.test(student.email)){
            setSendAlert(true);
            setAlertMessage("Por favor ingrese un correo valido");
        }else if(student.id<=0){
            setSendAlert(true);
            setAlertMessage("Por favor ingrese un documento valido");
        }else if(student.phone<=0){
            setSendAlert(true);
            setAlertMessage("Por favor ingrese un teléfono valido");
        }else{
            StudentService.create(student)
            .then(response =>{
                history.push("/estudiantes");
            }).catch(error =>{
                console.log("Ha ocurrido un error al agregar", error);
            });
            setSendAlert(false);
        }
    }
    
    return (
        <div className="container">
            <h1>Añadir nuevo estudiante</h1>
            <hr/>
            <p>{}</p>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                    type="number"
                    className="form-control col-4 mb-3"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Ingrese el Documento"
                    />
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingrese el nombre"
                    />
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Ingrese el apellido"
                    />
                    <input
                    type="text"
                    className="form-control col-4 mb-3"
                    id="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    placeholder="Ingrese el grado"
                    />
                    <input
                    type="email"
                    className="form-control col-4 mb-3"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese el correo electrónico"
                    />
                    <input
                    type="number"
                    className="form-control col-4 mb-3"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ingrese el teléfono"
                    />
                </div>
                {sendAlert
						? <div className="alert alert-danger" role="alert">{alertMessage}</div>: null}
                <div>
                    <button className="btn btn-primary" onClick={(e) =>saveStudent(e)}>Agregar</button>
                </div>
            </form>
            <hr/>
            <Link to="/estudiantes">Volver a la lista</Link>
        </div>

     );
    
}
export default AddStudent;