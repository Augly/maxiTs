/*
 * @Descripttion : EsSwap
 * @version      : 1.0.0
 * @Author       : 0xBalance
 * @Date         : 2023-02-28 12:38:36
 * @LastEditors  : 0xBalance
 * @LastEditTime : 2023-03-02 09:37:51
 */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import '@/styles/app.less'
import { HashRouter, useRoutes } from 'react-router-dom';
import routes from '@/router/index.tsx';
const GetRoutes = () => {
  const element = useRoutes(routes);
  return element;
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HashRouter>
        <GetRoutes />
      </HashRouter>
    </div>
  )
}
export default App
