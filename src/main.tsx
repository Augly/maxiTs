/*
 * @Descripttion : EsSwap
 * @version      : 1.0.0
 * @Author       : 0xBalance
 * @Date         : 2023-02-28 12:38:36
 * @LastEditors  : 0xBalance
 * @LastEditTime : 2023-02-28 14:44:04
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.less'
import CssBaseline from '@mui/material/CssBaseline';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </React.StrictMode>,
)
