import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header  from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const SurveNew = () => <h2>SurveNew</h2>
const Landing = () => <h2>Landing</h2>

const App = ()=>{
    return(
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveNew}/>
                </div> 
            </BrowserRouter>
        </div>
    );
};

export default App;