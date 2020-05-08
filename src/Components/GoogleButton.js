import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SIGN_IN, SIGN_OUT} from '../Actions';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

class GoogleButton extends Component {
    state={
        Style : {top:"0",right:"0",margin:"5px",position:"absolute",padding : ".2rem 0.5rem "},
        userName : null
    }
    
    componentDidMount() {
        var that=this;
        window.gapi.load("client:auth2",
        function(){
            window.gapi.client.init({
                clientId : "add your client id here",
                scope:"email"
            }).then(
                function(){
                    that.setAuthCondInState();
                    window.gapi.auth2.getAuthInstance().isSignedIn.listen(that.setAuthCondInState);
                }
            );
        });
    }

     setAuthCondInState = () => {
        if(window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
            var userId = window.gapi.auth2.getAuthInstance().currentUser.get().getId();
            var userName = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName();
            // those are a functions that returns the gmail ID and name at google.com, for the signed in user  .
            // this ID is unique for each user , and we will have a use for it later .
            // to identify the users and control what to render for every single one of them as we like .  
            this.props.SIGN_IN(userId,userName);
        }
        else {
            this.props.SIGN_OUT();
        }
     }

     signInAndOutClick = () => {
        if(!this.props.gstate.auth.authCond){
            
            window.gapi.auth2.getAuthInstance().signIn();      
        }
        else {
            window.gapi.auth2.getAuthInstance().signOut();
        }
     }

     signButtonRender = () => {
         if(this.props.gstate.auth.authCond === true) {
             return (
                 <div style={this.state.Style}>
                    <small style={{fontSize:"35%"}} className="d-inline-block text-success mt-0 mb-0 mr-2 align-top text-capitalize text-right">{this.props.gstate.auth.userName}<br/>you currently Signed in</small>
                    <button onClick={this.signInAndOutClick}  style={{padding : ".2rem 0.5rem "}}  className="btn btn-danger align-top">
                        <i style={{verticalAlign:"middle"}} className="fab fa-google-plus fa-2x"></i>
                         <span style={{verticalAlign:"middle",paddingLeft:"10px"}}>Sign Out</span> 
                    </button>
                </div>
            );
         }
         else if(this.props.gstate.auth.authCond === false) {
             
             return (
                <button onClick={this.signInAndOutClick} style={this.state.Style} className="btn btn-danger position-absolute">
                     <i className="fab fa-google-plus fa-2x"></i> <span style={{verticalAlign:"super",paddingLeft:"10px"}}>Sign in with Google</span> 
                </button>
            );
         }
         else {
            return (
               <button style={this.state.Style} className="btn btn-danger" type="button" disabled>
                    <i className="fab fa-google-plus fa-2x"></i>
                    <span style={{verticalAlign:"super",paddingLeft:"10px"}}>Loading <span  className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></span>
               </button>
           );
        }
     }
    

    render() {
        return this.signButtonRender();
    }
}

const mapStateToProps = (state) => {
    return {gstate : state};
};

export default connect(mapStateToProps, {SIGN_IN, SIGN_OUT}) (GoogleButton);