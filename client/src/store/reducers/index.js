///combine reducers
import { combineReducers } from "redux";
import viewReducer from "./viewReducer";
import createSurveyReducer from "./createSurveyReducer";
import fillSurveyReducer from "./answersReducer";
import answerContentReducer from "./answerContentReducer";
import authReducer from "./authReducer";
import responsesReducer from './responsesReducer'
import reportReducer from "./ReportReducer";
export default combineReducers({
  viewSurvey: viewReducer,
  createSurvey: createSurveyReducer,
  fillSurvey: fillSurveyReducer,
  questionAnswer: answerContentReducer,
  auth: authReducer,
  responses: responsesReducer,
  Report: reportReducer
});
