import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import  NotFound from "./components/NotFound";


function App(){

  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={StudentList}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
  
}

export default App;