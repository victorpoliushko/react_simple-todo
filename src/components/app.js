import React from 'react';
import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './todo-list';

const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false},
    {label: 'Make awesome App', important: true},
    {label: 'Have a lunch', important: false},
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ todoData } />
    </div>
  );
};

export default App;