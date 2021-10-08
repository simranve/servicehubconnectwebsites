import React from 'react'
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import * as actions from "../store/actions/index";

class Footer extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      contents:'',
      content1:'',
    }
  }
  
  async componentWillMount() {
    
    await this.props.fetchpagesList({
      page:"privacy_policy"
    });

    await this.props.fetchpagesList({
      page:"terms_condition"
    });
    
  }
  handleSubmit = async () => {
    
    console.log(this.props.pages)    
      await this.props.fetchpagesList({
        page:"privacy_policy"
      });
      await this.setState({
        contents:this.props.pages.privacy_policy
      })
    }
  handleSubmit1 = async () => {
      console.log(this.props)    
      
      await this.props.fetchpagesList({
        page:"terms_condition"
      });
      
      await this.setState({
        content1:this.props.term.terms_condition
      })
    
  }
  render(){
    
  return (
    <footer>
      <div className='container'>
        <div className='row align-items-end'>
          <div className='col'>
            <ul className='sociallinks'>
              <li><a href='https://www.facebook.com/profile.php?id=100071878116434' target="_blank"><img src={require('../assets/images/facebook_ic.png')} /> Facebook</a></li>
              <li><a href='https://twitter.com/ServiceHubConn1' target="_blank"><img src={require('../assets/images/twitter_ic.png')} /> Twitter</a></li>
              <li><a 
              // href='https://www.facebook.com/profile.php?id=100071878116434' target="_blank"
              href="#"
              ><img src={require('../assets/images/linkedin_ic.png')} /> Linkedin</a></li>
              <li><a href='https://www.instagram.com/servicehubconnect/' target="_blank"><img src={require('../assets/images/instagram_ic.png')} /> Instagram</a></li>
            </ul>
          </div>
          <div className='col-sm-6'>
            <div className='links'>
              <a 
                className="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#exampleModal2"
                onClick={(e) => this.handleSubmit1()}
                >Term & Condition</a>


                <div
                  className="modal fade"
                  id="exampleModal2"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      {/* Simran */}

                      <div className="row">
                      <div className="col-xl-12">
                        <div className="card">
                          <div className="card-header border-0">
                            <div className="row align-items-center">
                              <div className="col">
                                <div className="content" 
                                dangerouslySetInnerHTML=
                                {{__html: this.state.content1
                                }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a 
              className="nav-link"
              href="#"
              data-toggle="modal"
              data-target="#exampleModal3"
              onClick={(e) => this.handleSubmit()}
              
              >Privacy Policy</a>

              
                <div
                  className="modal fade"
                  id="exampleModal3"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      {/* Simran */}

                      <div className="row">
                      <div className="col-xl-12">
                        <div className="card">
                          <div className="card-header border-0">
                            <div className="row align-items-center">
                              <div className="col">
                                <div className="content" 
                                dangerouslySetInnerHTML=
                                {{__html: this.state.contents
                                }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <a href='https://apps.apple.com/in/app/servicehubconnect/id1588399255' target="_blank">
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
}
const mapPropsToState = (state) => {
  return {
    success: state.pages.success,
    error: state.pages.error,
    pages: state.pages.pages,
    term: state.pages.term,
    about: state.pages.about,
  
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchpagesList: (data) => dispatch(actions.fetchpagesListAction(data)),
    addPageAction: (data1,data2) => dispatch(actions.addPage(data1,data2)),
    
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(Footer));
