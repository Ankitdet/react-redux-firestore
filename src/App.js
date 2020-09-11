import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SingIn from './components/auth/SingIn';
import SingUp from './components/auth/SingUp';
import CreateProject from './components/projects/CreateProject';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact strict component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/singin" component={SingIn} />
          <Route path="/signup" component={SingUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
