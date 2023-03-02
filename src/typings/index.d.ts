/*
 * @Descripttion : EsSwap
 * @version      : 1.0.0
 * @Author       : 0xBalance
 * @Date         : 2023-03-01 11:10:09
 * @LastEditors  : 0xBalance
 * @LastEditTime : 2023-03-01 20:07:17
 */
import { MetaMaskInpageProvider } from '@metamask/providers';
type MessageEventType<T = any> = {
    type: string;
    datta?: T;
};

declare module '*.png';
declare module '*.tsx';
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.ts';
declare module '@web3-react/core';

declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider;
    }
}
declare module 'web3/useMetaConnect';
declare module 'web3/connectors';

declare module '*.tsx' {
    const value: any;
    export default value;
}
declare module 'react';
