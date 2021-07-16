import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function Login () {
  return (
    <div className='modalcont'>
      <div className='modalinner'>
        <div className='logo' href='#'>
          <img src={require('../assets/images/logo.png')} className='img-fluid' />
        </div>
        <h2>Login</h2>

        <div className='loginForm'>
          <div className='mb-3 mt-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control form-control-lg' id='email' placeholder='name@example.com' />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control form-control-lg' id='password' />
          </div>

          <div className='d-grid'>
            <button className='btn btn-primary btn-lg' type='button'>Login</button>
          </div>

          <div className='d-flex justify-content-between mt-4 mb-4'>
            <Link className='cyanLinks'>Forgot Password?</Link>
            <Link className='cyanLinks'>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
