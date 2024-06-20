// import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './store/theme-context/ThemeContext.jsx'
import { AuthProvider } from './store/auth-context/AuthContext.jsx'
import { LoadingProvider } from './store/loading-context/LoadingContext.jsx'
import { PreviewProvider } from './store/preview-context/PreviewContext.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnippetProvider } from './store/snippet-context/SnippetContext.jsx'
import { InputProvider } from './store/input-context/InputContext.jsx'

// * the value is fetched from the 'dataset-theme' prop of the HTML tag
// * this is utilized to change daisyUi themes dynamically on the HTML level
const getInitialThemeValue = document.querySelector('#html-element').dataset.theme
console.log(getInitialThemeValue)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <InputProvider>
      <SnippetProvider>
        <PreviewProvider>
          <LoadingProvider>
            <AuthProvider>
              <ThemeProvider initialThemeValueHTML={getInitialThemeValue}>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </ThemeProvider>
            </AuthProvider>
          </LoadingProvider>
        </PreviewProvider>
      </SnippetProvider>
    </InputProvider>
  //</React.StrictMode>
)