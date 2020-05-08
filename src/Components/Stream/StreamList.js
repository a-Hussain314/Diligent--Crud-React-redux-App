import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {GET_STREAMS} from '../../Actions/index';

import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import _ from 'lodash';

class StreamList extends Component {
   

    componentDidMount() {
        this.props.GET_STREAMS();
    }

  

     prerender = () => {
         const currentUserId = this.props.gstate.auth.userId;
        
            return (
                <div className="text-success  bg-light p-3  my-2">
                    <h3 className="text-center">StreamList</h3>
                    <hr/>
                    <div className="text-right p-1">
                        {this.props.gstate.auth.authCond ? <Link className="btn btn-success" to="/Stream/Create">Create Stream</Link>: null}
                    </div>
                    {this.props.streams.map(s=>
                     <div key={s.id} className="bg-light border p-3 text-success d-flex">
                            <i className="text-danger fas fa-video fa-3x"></i>
                        <div  className="px-3 flex-grow-1 ">
                            <Link className="text-success" to={`/Stream/Show/${s.id}`}><h5 className="text-info">{s.title}</h5></Link>
                            <p className="text-dark mb-0">{s.discription}</p>
                            <small className="text-capitalize" >By : {s.userName || "unknown"}</small> - <small>Stream Id : {s.id || "unknown"}</small>
                        </div>
                        <div>
                            {s.userId === currentUserId ? <div><Link to={`/Stream/Delete/${s.id}`} className="btn btn-danger m-1">Delete Stream</Link><Link to={`/Stream/Edit/${s.id}`} className="btn btn-info m-1">Edit Stream</Link></div>: null}
                        </div>
                     </div>
                    )}
                </div>
            ); 
        
}
    render() {
        return this.prerender();
    }
}

const mapStateToProps = (state) => {
    return {gstate : state,streams:Object.values(state.streams)};
};

export default connect(mapStateToProps, {GET_STREAMS} ) (StreamList);