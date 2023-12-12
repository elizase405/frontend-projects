import { useState, useEffect } from 'react'
import axios from 'axios'
import List from "./components/List"
import NewList from "./components/NewList"
import BG from './assets/bg.jpg'
import viteLogo from '/vite.svg'
import './App.css'

/*
const App = (props) => { 
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>  
    </div>
  )
}
*/

function App() {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState([])
  const [newTodo, setNewTodo] = useState("")
  const [deleted, setDeleted] = useState("done")

    const hook = () => {
        axios.get("http://localhost:3001/todos").then(res => setTodos(res.data))
    }

    useEffect(hook, [])

    const handleNewTodo = (event) => {
        setNewTodo(event.target.value)
    }

    const handleMouseOver = () => setDeleted("x")

    const handleMouseOut = () => setDeleted("done")

    const handleNewForm = () => setCount(count.concat(count.length + 1))

    const handleChecked = (event) => {
        const todoObject = {
            important: Math.random() < 0.5,
            content: newTodo
        }

        event.target.checked && axios
        .post("http://localhost:3001/todos", todoObject)
        .then(res => {
            setTodos(todos.concat(res.data))
            setNewTodo("")
        })
    }

    const submitTodo = (id) => {
        axios
        .delete(`http://localhost:3001/todos/${id}`)
        .then(res => console.log(res.data))
    }

  return (
    <>
        <div>
            <section className="header">
                <h3>little to-do list</h3>
                <button onClick={handleNewForm} className="header_button">+</button>
            </section>
            {todos.map(todo => <List key={todo.id} value={todo.content} deleted={deleted} handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver} handleNewTodo={handleNewTodo} handleChecked={handleChecked} submitTodo={() => submitTodo(todo.id)} />)}
            {count.length < 5 ? count.map(i => <NewList key={i} deleted={deleted} handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver} handleNewTodo={handleNewTodo} handleChecked={handleChecked} submitTodo={() => submitTodo(todo.id)} />) : "Delete more"}
        </div>
    </>
  )
}

export default App
