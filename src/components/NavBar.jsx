import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'



const NavBar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  
  
  return (
    
    <>
      <NavContainer>
        <nav className="">
            <ul >
              <div className={`links ${clicked ? 'active' : ''}`}>
              <li id="fg">
                <a href="">FG</a>
              </li>
              <li>
                <a href="#contacto" onClick={handleClick} className="item">Contacto</a>
              </li>

              <li>
                <a href="#proyectos" onClick={handleClick} className="item">Proyectos</a>
              </li>

              <li>
                <a href="#sobremi" onClick={handleClick} className="item">Sobre mi</a>
              </li>
              </div>
              <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick} />
              </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </ul>
            
        </nav>
        </NavContainer>  
  </>
  )
  
}





export default NavBar

const NavContainer = styled.nav`
  
  padding: .4rem;
  
  
  align-items: center;
  justify-content: space-between;
  
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      
      font-size: 2rem;
      display: block;
    } 
    /*esto borrar*/
    @media(min-width: 900px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        
        
      }
      display: block;
    }
  }
  .links.active{
    width: 50%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 1.5rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 900px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #111;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`