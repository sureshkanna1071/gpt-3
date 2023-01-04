import React from 'react'
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../assets/logo.svg"
import { useState } from 'react'

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#whpt3'>What is GPT3?</a></p>
  <p><a href='#possibility'>OpenAI</a></p>
  <p><a href='#feature'>case Study</a></p>
  <p><a href='#blog'>Library</a></p>
</>
)



function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>sign in</p>
        <button type='button'>sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggle 
        ? <RiCloseLine color="#fff" size="27" onClick={() => setToggle(false)} /> 
        : <RiMenu3Line color="#fff" size="27" onClick={() => setToggle(true)} />
        }
        {toggle 
        && <div className='gpt3__navbar-menu_container scale-up-center '>
          <div className='gpt3__navbar-menu_container-links'>
            <Menu />
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>sign in</p>
              <button type='button'>sign up</button>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar