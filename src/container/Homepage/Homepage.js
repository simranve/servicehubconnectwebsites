import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Login from "../Login";
import Signup from "../Signup";
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack'
import { 
  Button , 
  Modal ,
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  FormGroup,
	Label,
	Input,
} from 'reactstrap'
class Homepage extends React.Component{
  
  componentWillMount () {
    this.props.fetchCategory()
    console.log('this.props.listing')

    console.log(this.props.categorylisting)
  }
  render () {

    const userToken = localStorage.getItem('token')
    console.log(userToken)
    let categoryList = [];
    let i = 1;
    {this.props.categorylisting.length > 0
      ? this.props.categorylisting.map(datas => {
        categoryList.push(
          (i === 1) ?
            
            <div className="dashItem" style={{ background: "#fef7da" }}>
              {
                !userToken?
                <div><img src={datas.category_images} />
                <h3>{datas.name}</h3></div>:
              <div>
              <Link to={{
                pathname:"/subcategory",
                aboutProps:{
                  name:datas._id,
                  category:datas.name
                }
              }}
              // {"/subcategory/"+datas._id}
              >
                <img src={datas.category_images} />
                <h3>{datas.name}</h3>
              </Link></div>
            }
          </div>
        :(i===2)?
          
          <div className="dashItem" style={{ background: "#fee7db" }}>
          {
                !userToken?
                <div><img src={datas.category_images} />
                <h3>{datas.name}</h3></div>:
              <div>
              <Link
                to={{
                  pathname:"/subcategory",
                  aboutProps:{
                    name:datas._id,
                    category:datas.name
                  }
                }} 
              // to={"/subcategory/"+datas._id}
              >
                <img src={datas.category_images} />
                <h3>{datas.name}</h3>
              </Link></div>
            }
        </div>
            :(i===3)?
                  
              <div className="dashItem" style={{ background: "#f0ddfe" }}>
              {
                !userToken?
                <div><img src={datas.category_images} />
                <h3>{datas.name}</h3></div>:
              <div>
              <Link
              to={{
                pathname:"/subcategory",
                aboutProps:{
                  name:datas._id,
                  category:datas.name
                }
              }} 
              // to={"/subcategory/"+datas._id}
              >
                <img src={datas.category_images} />
                <h3>{datas.name}</h3>
              </Link></div>
            }
            </div>
            :
            (i===4)?
            <div className="dashItem" style={{ background: "#ddf0ff" }}>
            {
                !userToken?
                <div><img src={datas.category_images} />
                <h3>{datas.name}</h3></div>:
              <div>
              <Link
              to={{
                pathname:"/subcategory",
                aboutProps:{
                  name:datas._id,
                  category:datas.name
                }
              }}
              //  to={"/subcategory/"+datas._id}
              >
                <img src={datas.category_images} />
                <h3>{datas.name}</h3>
              </Link></div>
            }
          </div>:
            <div className="dashItem" style={{ background: "#f0ddfe" }}>
            {
                !userToken?
                <div><img src={datas.category_images} />
                <h3>{datas.name}</h3></div>:
              <div>
              <Link 
                to={{
                  pathname:"/subcategory",
                  aboutProps:{
                    name:datas._id,
                    category:datas.name
                  }
                }}
              // to={"/subcategory/"+datas._id}
              >
                <img src={datas.category_images} />
                <h3>{datas.name}</h3>
              </Link></div>
            }
          </div>
        )
        if(i === 5){
          i = 0;
        }
        ++i;
      })

      : categoryList.push(
        
        <div>
          
        </div>
      )}
    return (
      <>
        <Header />

        <section className="mt-5">
          <div className="container">
            <h1>Website shows features for now. To order download the app.</h1>
            <div className="dashItemCont mt-4">
              {categoryList}
            </div>
          </div>
        </section>

        <Footer />
        {/* <Login /> */}
        {/* <Signup /> */}
      </>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    categorylisting: state.category.categorylisting
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategory: () => dispatch(actions.fetchcategoryListAction()),
  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(Homepage))
