// import * as actions from "./actionsTypes"
// let lastId = 0;

// export default function reducer(state = [], action) {
//   if (action.type === actions.BUG_ADDED) {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === actions.BUG_REMOVED) {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   }

//   return state;
// }
