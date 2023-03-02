import React, { useRef, useState, useEffect } from 'react'
const Footer = (props: any) => {
  return (
    <div>
      <p>Footer</p>
      {props.children}
    </div>
  )
}
export default Footer;