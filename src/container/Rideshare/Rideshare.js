import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack'
class Rideshare extends React.Component {
  constructor(props){
    super(props)
    this.state={
      category_id:'',
      category_name:'',
    }
  }
  componentWillMount () {
    this.props.fetchSubCategory(this.state.category_id)
  }

  componentDidMount() {
    let category_id = this.props.match.params.id;
    if (category_id) {
        
        this.props.fetchSubCategory(category_id)
        this.setState({ 
            category_id:category_id,
            category_name:this.props.match.params.name
        });
    }
  }

  render () {

    let categoryList = [];
    let categoryList1 = [];

    let i = 1
      for (let index = 0; index < this.props.subcategorylisting.length; index++) {
        const element = this.props.subcategorylisting[index];
        categoryList1.push(
          <div className="ridebox">
                  <Link to="/carpool">
                    <img className="rounded-circle mb-15" width="100" height="100" src={this.props.subcategorylisting[index].sub_category_images} />
                    <h3>{this.props.subcategorylisting[index].name}</h3>
                  </Link>
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
              <h3 className="txtBlk"> {this.state.category_name}</h3>
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
    subcategorylisting: state.subCategory.subcategorylisting
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSubCategory: (data) => dispatch(actions.fetchsubCategoryListAction(data)),

  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(Rideshare))
