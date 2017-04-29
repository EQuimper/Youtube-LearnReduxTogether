/**
 *
 * SPEC
 *
 * Create a todo
 * List all todos
 * Click for completed todo
 * Delete a todo
 * Deleted all completed todos
 *
 *
 */

export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const DELETED_TODO = 'DELETED_TODO';
export const DELETED_ALL_COMPLETED_TODO = 'DELETED_ALL_COMPLETED_TODO';

export function createTodo(text) {
  return {
    type: CREATE_TODO,
    text
  }
}

export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    id
  }
}

export function deletedTodo(id) {
  return {
    type: DELETED_TODO,
    id
  }
}

export function deletedAllCompletedTodo() {
  return {
    type: DELETED_ALL_COMPLETED_TODO,
  }
}