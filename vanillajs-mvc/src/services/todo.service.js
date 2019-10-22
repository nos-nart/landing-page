/**
 * @class Service
 *
 * Manages data of the application.
 */
import Todo from '../models/todo.model';

class TodoService {
  constructor() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.todos = todos.map(todo => new Todo(todo));
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }

  _commit(todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  add(todo) {
    this.todos.push(new Todo(todo));
    this._commit(this.todos);
  }

  edit(id, todoEdit) {
    this.todos = this.todos.map(todo => todo.id === id ? new Todo({ ...todo, ...todoEdit }) : todo);
    this._commit(this.todos);
  }

  delete(id) {
    this.todos = this.todos.filter(todo => !todo.id === id);
    this._commit(this.todos);
  }

  toggle(id) {
    this.todos = this.todos.map(todo => todo.id === id ? new Todo({ ...todo, isDone: !todo.isDone}) : todo);
    this._commit(this.todos);
  }
}
