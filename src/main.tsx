import React from 'react'
import {createRoot} from 'react-dom/client';


import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { DarkTheme, BaseProvider } from 'baseui'

import './index.css'
import App from './App'

const engine = new Styletron()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
)
