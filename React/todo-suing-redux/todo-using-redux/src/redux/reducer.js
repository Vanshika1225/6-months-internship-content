const initialState = {
  byIds: {},
  allIds: [],
  visibilityFilter: "SHOW_ALL" 
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { id, inputData } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: { inputData },
        },
        allIds: [...state.allIds, id],
      };
    }

    case 'toggleTodo':{
      const {id}=action.payload
      return{
        ...state,
        byIds:{
          ...state.byIds,
          [id]:{
           ...state.byIds[id],
           completed:!state.byIds[id].completed
          }
        }
      }
    }
    default:
      return state;
  }
};

export default taskReducer;
