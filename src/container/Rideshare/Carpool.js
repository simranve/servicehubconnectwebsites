import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import GoogleMapReact from 'google-map-react';
import InputNumber from 'rc-input-number';

export default function Carpool () {
  return (
    <>
      <Header />

      <section className='mt-5 mb-5'>
        <div className='container'>
          <div className='d-flex mb-3'>
            <h3 className='uprheadng'>Dashboard / Ride Share /</h3>
            <h3 className='txtBlk'> Carpool</h3>
          </div>

          <div className='mapCont'>
            <div className='col-sm-5 p-4' style={{ height: '100%' }}>
              <div
                className='shadowCont d-flex flex-column justify-content-between'
                style={{ height: '100%' }}
              >
                <div className='p-4'>
                  <h4 className='cyanLinks'>Set Location</h4>

                  <div class='mb-3'>
                    <input
                      type='text'
                      class='form-control form-control-lg'
                      id='exampleFormControlInput1'
                      placeholder='Destination Pickup Point'
                    />
                  </div>
                  <div class='mb-3'>
                    <input
                      type='text'
                      class='form-control form-control-lg'
                      id='exampleFormControlInput1'
                      placeholder='Destination Pickup Point B'
                    />
                  </div>

                  <div class='mb-3'>
                    <input
                      type='text'
                      class='form-control form-control-lg'
                      id='exampleFormControlInput1'
                      placeholder='Destination Pickup Point B'
                    />
                  </div>

                  {/* <div class='mb-3'>
                    <InputGroup>
                      <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
                      <InputNumber
                        className={'custom-input-number'}
                        ref={inputRef}
                        max={99}
                        min={1}
                      />
                      <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
                    </InputGroup>
                  </div> */}
                </div>

                <Link to='/carpoollist' className='d-grid p-4'>
                  <button className='btn btn-primary btn-lg' type='button'>
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
