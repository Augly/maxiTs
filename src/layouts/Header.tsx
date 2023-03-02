import React, { useRef, useState, useEffect } from 'react'
const Header = (props: any) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
    </div>
  )
}
export default Header;