import React from 'react'
import {ImTwitter} from 'react-icons/im'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'



function Footer() {
  return (
    <div className='footer'>
        <a  href ='https://mobile.twitter.com/doryachie43'><ImTwitter className='social-icon' id='twitter'/></a>
        <a href ='https://www.facebook.com/profile.php?id=100071574071552'><FaFacebookSquare className='social-icon' id='facebook'/></a>
        <a href ='#'><BsInstagram className='social-icon'id='instagram'/></a>
        <a href ='https://github.com/Doreen-Odhiambo'><ImGithub className='social-icon' id='github'/></a>

    </div>
  )
}

export default Footer