/*
 * @Descripttion : EsSwap
 * @version      : 1.0.0
 * @Author       : 0xBalance
 * @Date         : 2023-02-28 16:12:19
 * @LastEditors  : 0xBalance
 * @LastEditTime : 2023-02-28 20:11:52
 */
import React, { useRef, useState, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
const Layout = (props: any) => {
  return (
    <div>
      <Header />
      <p>12121</p>
      {props.children}
      <Footer />
    </div>
  )
}
export default Layout;