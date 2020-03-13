export const ideasReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return [...state, action.idea];
    case 'DELETE_IDEA':
      let id = action.id
      return state.filter(idea => idea.id !== Number(id))
    default:
      return state;
  }
}