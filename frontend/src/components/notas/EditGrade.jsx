import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import GradeService from "../../services/GradeService";
import { Link } from 'react-router-dom';

const EditGrade = () => {

    const history = useHistory();
    const {id} = useParams();

    const [math, setMath] = useState("");
    const [arts, setArts] = useState("");
    const [language, setLanguage] = useState("");
    const [physics, setPhysics] = useState("");
    const [chemistry, setChemistry] = useState("");
    const [politics, setPolitics] = useState("");
    const [biology, setBiology] = useState("");
    const [sports, setSports] = useState("");
    const [english, setEnglish] = useState("");
    const [science, setScience] = useState("");

    const saveGrade = (e) =>{
        e.preventDefault();

        const grade = { id, math, arts, language, physics, chemistry, politics, biology, sports, english, science}
               
        GradeService.update(grade)
        .then(response =>{
            console.log("Estudiante editado correctamente", response.data);
            history.push(`/estudiantes/info/${id}`);
        }).catch(error =>{
            console.log("Ha ocurrido un error al modificar", error);
        });
        
    }

    useEffect(() => {
        if(id){
            GradeService.get(id)
                .then(grade => {
                setMath(grade.data.math);
                setArts(grade.data.arts);
                setLanguage(grade.data.language);
                setPhysics(grade.data.physics);
                setChemistry(grade.data.chemistry);
                setPolitics(grade.data.politics);
                setBiology(grade.data.biology);
                setSports(grade.data.sports);
                setEnglish(grade.data.english);
                setScience(grade.data.science);
            })
            .catch(error => {
                console.log('Hubo un error', error)
            })
        }
    },[])

    return ( 
        <div className="container">
            <h1>Editar notas</h1>
            <hr/>
            <form>
                <div className="form-group">

                    <label>Matemáticas</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="math"
                    value={math}
                    onChange={(e) => setMath(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>

                    <label>Español</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="lenguage"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>

                    <label>Ciencias</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="science"
                    value={science}
                    onChange={(e) => setScience(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>

                    <label>Sociales</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="politics"
                    value={politics}
                    onChange={(e) => setPolitics(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>

                    <label>Física</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="physics"
                    value={physics}
                    onChange={(e) => setPhysics(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>

                    <label>Química</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="chemistry"
                    value={chemistry}
                    onChange={(e) => setChemistry(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>

                    <label>Artes</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="arts"
                    value={arts}
                    onChange={(e) => setArts(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>

                    <label>Deportes</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="sports"
                    value={sports}
                    onChange={(e) => setSports(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>

                    <label>Biología</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="biology"
                    value={biology}
                    onChange={(e) => setBiology(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>

                    <label>Inglés</label> 
                    <select
                    type="text"
                    className="form-control col-4 mb-3"
                    id="english"
                    value={english}
                    onChange={(e) => setEnglish(e.target.value)}
                    >   <option>No aplica</option>
                        <option>Aprobado</option>
                        <option>Reprobado</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) =>saveGrade(e)}>Agregar</button>
                </div>
            </form>
            <hr/>
            <Link to="/estudiantes">Volver a la lista</Link>
        </div>
        
     );
}

export default EditGrade;