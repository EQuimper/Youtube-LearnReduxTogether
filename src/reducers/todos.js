import {
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  CREATE_TODO,
  CREATE_TODO_ERROR,
  CREATE_TODO_SUCCESS,
  COMPLETED_TODO,
  COMPLETED_TODO_ERROR,
  COMPLETED_TODO_SUCCESS,
  DELETED_TODO,
  DELETED_TODO_ERROR,
  DELETED_TODO_SUCCESS,
  DELETED_ALL_COMPLETED_TODO,
} from '../actions/todos';

const initialState = {
  data: [],
  error: null,
  isFetched: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
    case COMPLETED_TODO_SUCCESS:
    case CREATE_TODO_SUCCESS:
      return state;
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetched: true
      }
    case FETCH_TODOS_ERROR:
      return {
        ...state,
        error: action.error,
        isFetched: true
      }
    case CREATE_TODO:
      return {
        ...state,
        data: [
          ...state.data,
          action.todo
        ]
      };
    case CREATE_TODO_ERROR:
      return {
        ...state,
        isFetched: true,
        error: action.error,
        data: state.data.filter(todo => todo.id !== action.todo.id),
      }
    case COMPLETED_TODO:
      return {
        ...state,
        data: state.data.map(
          todo =>
            (todo.id === action.id
              ? {
                  ...todo,
                  completed: !todo.completed,
                }
              : todo),
        )
      }
    case COMPLETED_TODO_ERROR:
      return {
        ...state,
        data: state.data.map(
          todo =>
            (todo.id === action.id
              ? {
                  ...todo,
                  completed: !todo.completed,
                }
              : todo),
        )
      }
    case DELETED_TODO:
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== action.id)
      }
    case DELETED_TODO_SUCCESS:
      return state;
    case DELETED_TODO_ERROR:
      return {
        ...state,
        error: action.error,
        data: [
          ...state.data,
          action.todo
        ]
      }
    case DELETED_ALL_COMPLETED_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
