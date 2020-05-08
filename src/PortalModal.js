import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from './History';


class PortalModal extends Component {
    style1 = {
        top : "0",
        backgroundColor : "rgba(0, 0, 0, 0.75)",
        height : "100vh"
    }

    render() {
        return ReactDOM.createPortal(
            <div onClick={()=>{createBrowserHistory.push("/")}} style={this.style1} className="position-absolute w-100 d-flex align-items-center justify-content-center">
                <div onClick={(e)=>{e.stopPropagation()}} className="card">
                    <div className="card-header h4 text-danger ">Delete Stream</div>
                    <div className="card-body">
                        {/* <h5 className="card-title">Special title treatment</h5> */}
                        <p className="card-text text-success h6">Are You Sure You Want To Delete Stream : <span className="text-info h6">{this.props.title}</span></p>
                    </div>
                    <div className="text-right border-top p-2">
                        <button onClick={this.props.clickHandler}  className="btn btn-danger mx-1">Delete</button>
                        <button onClick={()=>{createBrowserHistory.push("/")}}  className="btn btn-secondary mx-1">Cancel</button>
                    </div>
                </div>
            </div>,
            document.getElementById("modal")
            ); 
    }
}

export default PortalModal;