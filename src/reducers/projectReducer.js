import { GET_PROJECTS, GET_PROJECT } from "../actions/types";

//projecst[] ->> get All Projects
//project{} ->> get Project by ID
const initialState = {
  projects: [],
  project: {},
};

export default function (state = initialState, action) {
  // bir state ve bir action geliyor
  switch (action.type) {
    case GET_PROJECTS:
      //return içinde yenilenmiş state i geri dönüyoruz.
      return {
        ...state, //bu bizim eski state imiz.
        projects: action.payload, // bu yeni state imiz.
      };

    case GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    default:
      //tanımlı bir type girilmediyse bu sekilde eskinin dönebiliriz.
      return state;
  }
}
