import * as actions from "../actions/types";
const initialState = {
  title: "newSurvey",
  pages: [
    {
      questions: []
    }
  ],
  color: '#553c8b'
};
const reducer = (state = initialState, action) => {
  let newPages = [...state.pages];
  let newColor = [...state.color]
  switch (action.type) {
    case actions.ADD_QUESTION:
      const newQuestion = {
        type: action.Qtype,
        title: "Untitled Question",
        content: {
          choices: ["Option 1"],
          min: "1",
          max: "10",
          step: "",
          defaultValue: ""
        }
      };
      newPages[0].questions.push(newQuestion);
      break;
    case actions.CHANGE_SURVEY_TITLE:
      return {
        ...state,
        title: action.val
      }
    case actions.DELETE_QUESTION:
      newPages[0].questions = newPages[0].questions.filter(
        (_, index) => index !== action.index
      );
      break;
    case actions.CHANGE_QUESTION_TITLE:
      newPages[0].questions[action.index].title = action.val;
      break;
    case actions.CHANGE_QUESTION_TYPE:
      newPages[0].questions[action.index].type = action.val;
      break;
    case actions.CHANGE_CHOISE_LABEL:
      newPages[0].questions[action.index].content.choices[action.choiceIndex] =
        action.val;
      break;
    case actions.ADD_CHOICE:
      newPages[0].questions[action.index].content.choices.push(
        "Option " +
        (newPages[0].questions[action.index].content.choices.length + 1)
      );
      break;
    case actions.DELETE_CHOICE:
      const newChoices = newPages[0].questions[
        action.index
      ].content.choices.filter((_, index) => index !== action.choiceIndex);
      newPages[0].questions[action.index].content.choices = newChoices;
      break;
    case actions.CHANGE_LINEAR_CONTENT:
      switch (action.content) {
        case actions.CHANGE_MIN_VALUE:
          newPages[0].questions[action.index].content.min = action.val;
          break;
        case actions.CHANGE_MAX_VALUE:
          newPages[0].questions[action.index].content.max = action.val;
          break;
        case actions.CHANGE_STEP_VALUE:
          newPages[0].questions[action.index].content.step = action.val;
          break;
        case actions.CHANGE_DEFAULT_VALUE:
          newPages[0].questions[action.index].content.defaultValue = action.val;
          break;
        default:
          break;
      }
      break;
    case actions.CHANGE_BG:
      console.log(action.color);
      newColor = action.color;
      break

    default:
      break;
  }
  return {
    ...state,
    pages: newPages,
    color: newColor
  };
};
// const handleContentOfType = Question => {
//   switch (Question.type) {
//     case Qtypes.TEXT:
//       Question.content = {};
//       return;
//     case Qtypes.RADIO_GROUP:
//     case Qtypes.CHECKBOX:
//     case Qtypes.DROPDOWN:
//       Question.content = {
//         choices: ["Option 1"]
//       };
//       return;
//     default:
//       return;
//   }
// };
export default reducer;
