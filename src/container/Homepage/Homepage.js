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
                // !userToken?
                // <div><img src={datas.category_images} />
                // <h3>{datas.name}</h3></div>:
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
                // !userToken?
                // <div><img src={datas.category_images} />
                // <h3>{datas.name}</h3></div>:
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
                // !userToken?
                // <div><img src={datas.category_images} />
                // <h3>{datas.name}</h3></div>:
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
                // !userToken?
                // <div><img src={datas.category_images} />
                // <h3>{datas.name}</h3></div>:
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
                // !userToken?
                // <div><img src={datas.category_images} />
                // <h3>{datas.name}</h3></div>:
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
            {/* <h1>Website shows features for now. To order download the app.</h1> */}
            <h2><u>Categories</u></h2>
            <div className="dashItemCont mt-4">
              {categoryList}
            </div>
            <h2><u>Plans</u></h2>
            <div className="dashItemCont1 mt-4">
              <div className="dashItem" style={{ background: "#2dbbab" }}>
                  <h3>Basic Package</h3> 
                  <h3> $29.99/Month</h3>
                    <h3>Benefits</h3>
                    <h4>i. App only</h4>
                    <h4>ii. Upcoming service</h4>
                    <h4>iii. Current service </h4>
                    <h4>iv. Reschedule service</h4>
                    <h4>v. My service</h4>
                    <h4>vi. Setting</h4>
                    <h4>vii. Card payment</h4> 
                    <h4>viii. My invoice </h4>
                    <h4>ix. My income</h4>
                    <h4>x. Cash out </h4>
                    <h4>xi. My rating & comment</h4> 
                    <h4>xii. Notification </h4>
                    <h4>xiii. Manage and control your platform</h4>
                    <h4>xiv. Access to admin panel</h4>
              </div>
              <div className="dashItem" style={{ background: "#DAA520" }}>
                    <h3>Gold Package</h3> 
                    <h3>$99/Month</h3>
                    <h3>All benefits of basic package plus</h3>
                    <h4>i. Personalized business online ordering or booking website</h4>
                    <h4>ii. Restaurant, grocery and product pick up and delivery available </h4>
                    <h4>iii. Privacy policy, terms and conditions for personalized business website</h4> 
                    <h4>iv. Social media available </h4>
                    <h4>vii. One app for all businesses</h4>
              </div>
              <div className="dashItem" style={{ background: "#C0C0C0" }}>
                    <h3>Platinum Package</h3> 
                    <h3>$199/month</h3>
                    <h3>All Benefits of Gold Package Plus</h3>
                    <h4>i. Marketing, advertising and promoting of your business</h4>
                    <h4>ii. 24 hours customer service </h4>
              </div>
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
