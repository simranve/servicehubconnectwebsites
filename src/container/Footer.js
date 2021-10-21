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
              href="https://vm.tiktok.com/ZM8Lhnbeb/" target="_blank"
              ><img src="data:image/png;base64,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" /> Tik Tok</a></li>
              <li>
                <a href='https://www.instagram.com/servicehubconnect/' target="_blank"><img src={require('../assets/images/instagram_ic.png')} /> Instagram</a></li>
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
            <a href='https://play.google.com/store/apps/details?id=com.Servicehubconnect' target="_blank">
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
