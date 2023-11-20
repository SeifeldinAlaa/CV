import React from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Projects from './components/Projects';
import Navbar from './components/Navbar';




function App() {

    return (
        <HashRouter>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/skills' component={Skills} />
                    <Route path='/educations' component={Educations} />
                    <Route path='/experiences' component={Experiences} />
                    <Route path='/projects' component={Projects} />

                </Switch>

            </Router>
        </HashRouter>




    );
}

export default App;