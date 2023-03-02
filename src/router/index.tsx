/*
 * @Descripttion : EsSwap
 * @version      : 1.0.0
 * @Author       : 0xBalance
 * @Date         : 2023-02-24 02:17:04
 * @LastEditors  : 0xBalance
 * @LastEditTime : 2023-03-02 09:38:11
 */
import Layout from '@/layouts/index.tsx';
import { Navigate } from 'react-router-dom';
const routes = [
    {
        path: '/',
        element: <Layout/>,
        // children: [
        //     { path: '/', element: <Navigate to="/index" /> },
        //     { path: '/assets', element: <Assets /> },
        //     { path: '/login', element: <Login /> },
        //     { path: '/sourceId', element: <SourceId /> },
        //     { path: '/credentials', element: <Credentials /> },
        // ],
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    }
];

export default routes;
