import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import  NotFound from "./components/NotFound";
import AddStudent from "./components/AddStudent";


function App(){

  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={StudentList}/>
          <Route path="/agregar" component={AddStudent}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
  
}

export default App;