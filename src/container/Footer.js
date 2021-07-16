import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function Footer () {
  return (
    <footer>
      <div className='container'>
        <div className='row align-items-end'>
          <div className='col'>
            <ul className='sociallinks'>
              <li><a href='#'><img src={require('../assets/images/facebook_ic.png')} /> Facebook</a></li>
              <li><a href='#'><img src={require('../assets/images/twitter_ic.png')} /> Twitter</a></li>
              <li><a href='#'><img src={require('../assets/images/linkedin_ic.png')} /> Linkedin</a></li>
              <li><a href='#'><img src={require('../assets/images/instagram_ic.png')} /> Instagram</a></li>
            </ul>
          </div>
          <div className='col-sm-5'>
            <div className='links'>
              <a href='#'>Term & Condition</a>
              <a href='#'>Privacy Policy</a>
            </div>
          </div>
          <div className='col-sm-3'>
            <a href='#'>
              <img src={require('../assets/images/app_store_ic.png')} style={{ height: 70, marginBottom: 10 }} />
            </a>
            <a href='#'>
              <img src={require('../assets/images/play_store_ic.png')} style={{ height: 70 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
