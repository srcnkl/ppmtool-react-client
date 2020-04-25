import React, { Component } from 'react'
import Projectitems from './Project/Projectitems';
import Header from './Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateProjectButton from './Project/CreateProjectButton';

class Dashboard extends Component {
    render() {
        return (
            // Dashboard Component (Project Item included)
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Projects</h1>
                        <br />
                        <CreateProjectButton/>
                        <br />
                        <hr />
                        <Projectitems/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Dashboard;