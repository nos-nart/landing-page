/**
 * @class View
 *
 * Visual representation of the model
 */

class UserView {
  constructor() {
    this.app = this.getElement('#root');
  }

  createInput({ key, type, placeholder, name } = { key: 'default', type: 'text', placeholder: 'default', name: 'default'}) {
    this[key] = this.createElement('input');
    this[key].type = type;
    this[key].placeholder = placeholder;
    this[key].name = name;
  }

  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList(className);
    return element;
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  renderTodo(todos) {
    // Delete all nodes
    while(this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }
  }
}
