import { useState } from 'react';

export const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: event => {
      setInputValue(event.nativeEvent.text)},
    clearInput: () => setInputValue(''),
  };
};


export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,

    addTodo: todoText => {
      if (todoText !== '') {
        setTodos(todos.concat({ todoText, checked: false }));
      }
    },

    checkTodo: checkIndex => {
      setTodos(
        todos.map((todo, index) => {
          if (checkIndex === index) todo.checked = !todo.checked;
        return todo;
        })
      )
    },

    removeTodo: removeIndex => {
      setTodos(todos.filter((todos, index) => removeIndex !== index));
    }
  };
};
