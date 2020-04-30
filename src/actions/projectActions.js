import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT } from "./types";

export const createProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
    dispatch({
      // dispatch yardımı ile action type ve endpoint ten aldığımız datayı reducer a veririz.
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      // dispatch yardımı ile action type ve endpoint ten aldığımız datayı reducer a veririz.
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProjects = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/project/all");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

//when we got an error we will redirecting to dashboard this is why we use history param
//id coming from url when we click update project button on project items
export const getProject = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/project/${id}`);
    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (error) {
    //when user search from url with non exist id we redirect to dasbhoard page.
    history.push("/dashboard");
  }
};
