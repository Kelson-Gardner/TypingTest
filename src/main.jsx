import React from 'react'
import ReactDOM from 'react-dom/client'
import Keyboard from './Keyboard.jsx'
import Phrase from './Phrase.jsx'
import './Index.css'
import './Phrase.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Phrase />
    <div id="keyboard-container">
    <Keyboard />
    </div>
  </React.StrictMode>,
)
