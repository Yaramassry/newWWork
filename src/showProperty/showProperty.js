import React, { Component } from "react";
import { connect } from 'react-redux';
import { getShowProperty } from "../actions/showPropertyAction";

class showProperty extends React.Component {
    constructor() {
        super();
        this.state = {
            property:{},
            title:"",
            type:"",
            description:"",
            reference_id:"",
            province:"",
            thumbnails:""

        };
      }

  componentDidMount() {
   
    let id=this.props.match.params.id;
    this.props.getShowProperty(id);
    // console.log("222222222222400");
    // console.log(id)
      
  }
   
  async componentWillReceiveProps(nextProps, nextState) {
   
   
          if (
            nextProps.property !== this.state.property
          ){
            
             this.setState({
                property : nextProps.property
              // title: nextProps.property.title,
              // description:nextProps.property.description,
              // reference_id:nextProps.property.reference_id,
              // province:nextProps.property.province
                })
                console.log("hhhhhhhhhhhhhhhh");
                console.log(nextProps.property.title)
          
          } else {
            this.setState({
              property:null
            });
        
          }
}


      render(){
        // console.log(this.state.title);
        // console.log("this.state.title");
          return(
           
              <span>
                {this.state.property.title}
                <br />
                {this.state.property.description},
              

              </span>
          )

      }
    }
    const mapStateToProps = (state) => ({
        property:state.showPropertyR.property

      });

    export default connect(mapStateToProps, {
        getShowProperty,
      })(showProperty);