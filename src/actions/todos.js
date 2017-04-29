import uuid from 'uuid/v4';

import TodoApi from '../utils/api/todoApi';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export const CREATE_TODO = 'CREATE_TODO';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_ERROR = 'CREATE_TODO_ERROR';


export const COMPLETED_TODO = 'COMPLETED_TODO';
export const COMPLETED_TODO_SUCCESS = 'COMPLETED_TODO_SUCCESS';
export const COMPLETED_TODO_ERROR = 'COMPLETED_TODO_ERROR';

export const DELETED_TODO = 'DELETED_TODO';
export const DELETED_TODO_SUCCESS = 'DELETED_TODO_SUCCESS';
export const DELETED_TODO_ERROR = 'DELETED_TODO_ERROR';


export const DELETED_ALL_COMPLETED_TODO = 'DELETED_ALL_COMPLETED_TODO';

export function fetchTodos() {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS });
    try {
      const data = await TodoApi.getAllTodo();
      return dispatch({ type: FETCH_TODOS_SUCCESS, data });
    } catch (error) {
      return dispatch({
        type: FETCH_TODOS_ERROR,
        error,
      });
    }
  }
}

export function createTodo(text) {
  return async (dispatch) => {

    const todo = {
      text,
      id: uuid(),
      completed: false
    }

    dispatch({ type: CREATE_TODO, todo });

    try {
      await TodoApi.createTodo(todo);

      return dispatch({ type: CREATE_TODO_SUCCESS });
    } catch (error) {
      return dispatch({
        type: CREATE_TODO_ERROR,
        error,
        todo
      });
    }
  }
}

export function completedTodo(id) {
  return async (dispatch, getState) => {
    await dispatch({ type: COMPLETED_TODO, id });
    const todo = getState().todos.data.filter(todo => todo.id === id)[0];

    try {
      await TodoApi.completedTodo(todo);
      return dispatch({ type: COMPLETED_TODO_SUCCESS });
    } catch (error) {
      return dispatch({
        type: COMPLETED_TODO_ERROR,
        error,
        id
      });
    }
  }
}

export function deletedTodo(id) {
  return async (dispatch, getState) => {
    const todo = getState().todos.data.filter(todo => todo.id === id)[0];

    dispatch({ type: DELETED_TODO, id });

    try {
      await TodoApi.deletedTodo(id);
      return dispatch({ type: DELETED_TODO_SUCCESS });
    } catch (error) {
      return dispatch({
        type: DELETED_TODO_ERROR,
        error,
        todo,
      });
    }
  }
}

export function deletedAllCompletedTodo() {
  return {
    type: DELETED_ALL_COMPLETED_TODO,
  }
}