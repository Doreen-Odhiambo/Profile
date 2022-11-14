import React from 'react'
import image from '../assets/profile.jpeg'
import '../styles/mystyles.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'

function Infosection() {
  return (
    <div className='infosec'>
        <img  id = 'prof-pic'src={image}alt="profile pic" />
        <h1 id="info-head">Odhiambo Doreen</h1>
        <h2 id='info-desc'>Frontend Developer</h2>
        <a  id='info-link' href='#'>doryn@dev.com</a>
        <div className='btns'>
        <a className='btn' id ='email' href='#'> <MdMarkEmailRead id='icon'/>Email</a>
        <a  className = 'btn' id='linkedin' href='https://www.linkedin.com/in/odhiambo-doreen-451902230/'> <CiLinkedin  id= 'icn'/>LinkedIn</a>
        </div>
    </div>
  )
}

export default Infosection