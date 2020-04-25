import React, { Component } from "react";
import Projectitems from "./Project/Projectitems";
import Header from "./Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount(){
      this.props.getProjects();
  }
  render() {
    return (
      // Dashboard Component (Project Item included)
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              <Projectitems />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};
//state.project deki project bizim state içinde bulunan project tag imiz. index.js te tanımlı. error gibi.
const mapStateToProps = (state) => ({
  project: state.project
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
