import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentList from "./components/estudiantes/StudentList";
import  NotFound from "./components/NotFound";
import AddStudent from "./components/estudiantes/AddStudent";
import EditStudent from "./components/estudiantes/EditStudent";
import TeacherList from './components/profesores/TeachersList'
import AddTeacher from "./components/profesores/AddTeacher";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "bootswatch/dist/united/bootstrap.min.css";


function App(){

  return(
    <BrowserRouter>
      <NavBar/>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/estudiantes" component={StudentList}/>
          <Route path="/agregar" component={AddStudent}/>
          <Route path="/profesores" component={TeacherList}/>
          <Route path="/agregarprofesores" component={AddTeacher}/>
          <Route path="/estudiantes/editar/:id" component={EditStudent}/>
          <Route path="*" component={NotFound}/>
        </Switch>

      </div>
    </BrowserRouter>
  )
  
}

export default App;