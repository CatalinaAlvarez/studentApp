import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentList from "./components/estudiantes/StudentList";
import  NotFound from "./components/NotFound";
import AddStudent from "./components/estudiantes/AddStudent";
import EditStudent from "./components/estudiantes/EditStudent";
import TeacherList from './components/profesores/TeachersList'
import AddTeacher from "./components/profesores/AddTeacher";
import EditTeacher from "./components/profesores/EditTeacher";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "bootswatch/dist/lumen/bootstrap.min.css";
import MoreInfoStudent from "./components/estudiantes/MoreInfoStudent";
import MoreInfoTeacher from './components/profesores/MoreInfoTeacher';
import EditGrade from './components/notas/EditGrade';


function App(){

  return(
    <BrowserRouter>
      <NavBar/>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/estudiantes/info/:id" component={MoreInfoStudent}/>
          <Route path="/estudiantes/notas/:id" component={EditGrade}/>
          <Route path="/estudiantes/editar/:id" component={EditStudent}/>
          <Route path="/estudiantes" component={StudentList}/>
          <Route path="/profesores/editar/:id" component={EditTeacher}/>
          <Route path="/profesores/info/:id" component={MoreInfoTeacher}/>
          <Route path="/agregar" component={AddStudent}/>
          <Route path="/profesores" component={TeacherList}/>
          <Route path="/agregarprofesores" component={AddTeacher}/>
          
          <Route path="*" component={NotFound}/>
        </Switch>

      </div>
    </BrowserRouter>
  )
  
}

export default App;