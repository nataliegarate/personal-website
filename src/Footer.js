import React from 'react'

function Footer() {
  return (
    <div id='footer-container'>
      <div className='footer-title'>
        Contact
        <br />
      </div>
      <div className='footer-contact-container'>
        <div className='footer-item' id ='email'>
        <a href = "mailto: natalieegarate@gmail.com">
          <i class="fa fa-envelope" aria-hidden="true"></i>
         </a>
        </div>
        <a href='https://www.linkedin.com/in/natalie-garate/' target="_blank">
        <div className='footer-item'>
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>

        </div>
        </a>
        <a href='https://github.com/nataliegarate' target="_blank">
          <div className='footer-item'>
            <i class="fa fa-github-square" aria-hidden="true"></i>

          </div>
        </a>
      </div>
    </div>
  )
}

export default Footer;
