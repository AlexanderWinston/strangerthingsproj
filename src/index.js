import React from 'react'
import ReactDOM from "react-dom/client"
import {Main} from './components'
import { getPosts } from './api-adapter'


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

root.render(<Main />)