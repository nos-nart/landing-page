import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'
import { ThemeProvider } from 'emotion-theming'
// import theme from 

const rootElement = document.querySelector("#root")
ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>,
    rootElement
)