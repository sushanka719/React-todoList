
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';
import TodoItems from './components/TodoItems';

function App() {

  const [inputData, setInputData] = useState('')
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('default')

  function deleteItemHandler(itemId) {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId))
  }


  function markAsCompleted(itemId) {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item)
    )
  }

  function markAllComplete() {
    setItems(prevItems => prevItems.map(item => ({ ...item, completed: true })))
  }

  function addItemHandler(item) {
    setItems(items => [...items, item])
  }

  const userItem = { id: Date.now(), task: inputData, completed: false }

  function submitHandler(e) {
    e.preventDefault()

    if (!inputData) return

    addItemHandler(userItem)
    setInputData('')
    setFilter('default')
  }

  return (
    <div className="app">
      <div className='container'>
        <NavBar />
        <Form inputData={inputData} setInputData={setInputData} submitHandler={submitHandler} filter={filter} setFilter={setFilter} markAllComplete={markAllComplete} />
        <TodoItems items={items} deleteItemHandler={deleteItemHandler} completedHandler={markAsCompleted} filter={filter} />
      </div>
    </div>
  );
}

export default App;
