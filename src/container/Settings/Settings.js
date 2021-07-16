import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap'
import Header from '../Header'
import Footer from '../Footer'

export default function Settings () {
  return (
    <>
      <Header />

      <section className='mt-5 mb-5'>
        <div className='container'>
          <div className='d-flex mb-3'>
            <h3> Settings</h3>
          </div>

          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
            <Row>
              <Col sm={5}>
                <div className='shadowCont py-3'>
                  <Nav variant='pills' className='flex-column tabNav'>
                    <Nav.Item>
                      <Nav.Link eventKey='first'>Profile <img src={require('../../assets/images/next_ic.png')} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='second'>Change Password <img src={require('../../assets/images/next_ic.png')} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='third'>Privacy Policy <img src={require('../../assets/images/next_ic.png')} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='fourth'>Term and Condition <img src={require('../../assets/images/next_ic.png')} /></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
              <Col sm={7}>
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    <div className='shadowCont p-5'>
                      <h3>Profile</h3>

                      <div className='d-flex justify-content-between mt-5'>
                        <div className='d-flex align-items-center'>
                          <img src={require('../../assets/images/executive_ride_ic.png')} />
                          <div className='proCont'>
                            <h3>John Doe</h3>
                            <p>+91 99999 99999</p>
                            <p>johndoe123@gmail.com</p>
                            <p>New York</p>
                          </div>
                        </div>
                        <Link>
                          <img src={require('../../assets/images/edit_ic.png')} width='45px' />
                        </Link>
                      </div>

                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <div className='shadowCont p-5'>
                      <Col sm={7}>
                        <h3> Change Password</h3>
                        <div className='mt-4 mb-3'>
                          <label htmlFor='password' className='form-label'>Old Password</label>
                          <input type='password' className='form-control form-control-lg' id='password' />
                        </div>
                        <div className='mb-3'>
                          <label htmlFor='password' className='form-label'>New Password</label>
                          <input type='password' className='form-control form-control-lg' id='password' />
                        </div>
                        <div className='mb-5'>
                          <label htmlFor='password' className='form-label'>Confirm Password</label>
                          <input type='password' className='form-control form-control-lg' id='password' />
                        </div>

                        <div className='d-grid'>
                          <button className='btn btn-primary btn-lg' type='button'>Save</button>
                        </div>
                      </Col>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey='third'>
                    <div className='shadowCont p-5'>
                      <h3 className='mb-4'>Privacy Policy</h3>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non blandit massa enim nec. Mattis enim ut tellus elementum sagittis vitae. Tellus id interdum velit laoreet id donec ultrices. Mauris augue neque gravida in fermentum. Sodales ut eu sem integer vitae justo eget. Ac tincidunt vitae semper quis lectus. </p>
                      <p>Viverra tellus in hac habitasse platea dictumst vestibulum. Facilisi morbi tempus iaculis urna id. Enim sit amet venenatis urna cursus eget nunc scelerisque. Volutpat consequat mauris nunc congue nisi. Magnis dis parturient montes nascetur ridiculus mus. Rhoncus mattis rhoncus urna neque viverra justo.</p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey='fourth'>
                    <div className='shadowCont p-5'>
                      <h3 className='mb-4'>Term and Condition</h3>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non blandit massa enim nec. Mattis enim ut tellus elementum sagittis vitae. Tellus id interdum velit laoreet id donec ultrices. Mauris augue neque gravida in fermentum. Sodales ut eu sem integer vitae justo eget. Ac tincidunt vitae semper quis lectus. Viverra tellus in hac habitasse platea dictumst vestibulum. Facilisi morbi tempus iaculis urna id. Enim sit amet venenatis urna cursus eget nunc scelerisque. Volutpat consequat mauris nunc congue nisi. Magnis dis parturient montes nascetur ridiculus mus. Rhoncus mattis rhoncus urna neque viverra justo.</p>
                      <p>Viverra tellus in hac habitasse platea dictumst vestibulum. Facilisi morbi tempus iaculis urna id. Enim sit amet venenatis urna cursus eget nunc scelerisque. Volutpat consequat mauris nunc congue nisi. Magnis dis parturient montes nascetur ridiculus mus. Rhoncus mattis rhoncus urna neque viverra justo.</p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

        </div>
      </section>

      <Footer />
    </>
  )
}
