import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Route } from 'react-router-dom';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack'
class Rideshare extends React.Component {
  constructor(props){
    super(props)
    this.state={
      category_id:'',
      category_name:''
    }
  }
  
  componentWillMount () {
    this.props.fetchSubCategory(this.state.category_id)
    this.props.fetchCategory()
    
    if(this.props.categorylisting.length > 0) {
      this.setState({ 
        category_id:this.props.categorylisting[0]._id,
      });
      console.log("simran")
    }
  }

  async componentDidMount() {
    if (this.props != undefined && this.props.location != undefined && this.props.location.aboutProps != undefined && this.props.location.aboutProps.name != undefined) {
        let category_id = this.props.location.aboutProps.name;
        let category_name = this.props.location.aboutProps.category;
        this.props.fetchSubCategory(category_id)
        this.setState({ 
            category_id:category_id,
            category_name:category_name
        });
    }
  }

  render () {

    let category_name = ""
    let categoryList = [];
    let categoryList1 = [];
    for (let index = 0; index < this.props.categorylisting.length; index++) {
      if(this.props != undefined && this.props.location != undefined && this.props.location.aboutProps != undefined && this.props.location.aboutProps.name != undefined && this.props.categorylisting[index]._id == this.state.category_id)
      {
        category_name = this.props.categorylisting[index].name
        break
      }
      else{
        category_name = <Redirect from="./subcategory" to= "/"/>
      }
    }
      let i = 1
      for (let index = 0; index < this.props.subcategorylisting.length; index++) {
      const element = this.props.subcategorylisting[index];
      categoryList1.push(
        <div className="ridebox">
                {/* <Link to="/carpool"> */}
                  <img className="rounded-circle mb-15" width="100" height="100" src={this.props.subcategorylisting[index].sub_category_images} />
                  <h3>{this.props.subcategorylisting[index].name}</h3>
                {/* </Link> */}
              </div>
      )
      if(i == 4 || this.props.subcategorylisting.length == index+1 ){
        categoryList.push(
        <div className="rideboxCont">
              {categoryList1}
        </div>)
        categoryList1 = [];
        i = 1;
        }
      }
        

    return (
      <>
        <Header />

        <section className="mt-5">
          <div className="container">
            <div className="d-flex">
              <h3 className="uprheadng">Dashboard / </h3>
              <h3 className="txtBlk"> {category_name}</h3>
            </div>

            <div className="shadowCont mt-4 mb-5">
              {categoryList}
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    subcategorylisting: state.subCategory.subcategorylisting,
    categorylisting: state.category.categorylisting
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSubCategory: (data) => dispatch(actions.fetchsubCategoryListAction(data)),
    fetchCategory: () => dispatch(actions.fetchcategoryListAction()),
  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(Rideshare))
