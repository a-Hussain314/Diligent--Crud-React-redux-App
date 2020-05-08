import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router , Route} from 'react-router-dom';
import createBrowserHistory from '../History';
import {Link} from 'react-router-dom';

import GoogleButton from './GoogleButton';
import StreamCreate from './Stream/StreamCreate';
import StreamDelete from './Stream/StreamDelete';
import StreamEdit from './Stream/StreamEdit';
import StreamList from './Stream/StreamList';
import StreamShow from './Stream/StreamShow';


class App extends Component {
    render() {
        return (
            <Router history={createBrowserHistory}>
            <div className="">
                <div className="bg-light border-bottom  p-2 h1 text-left text-danger position-relative">
                    Diligent Stream
                    <GoogleButton/>
                </div> 
                <div className="text-left">
                    <Link className="mx-4 text-info h5" to="/">All Streams</Link>
                </div>
                <div className="bg-light">
                    <Route  path="/"                  exact   component={StreamList}   ></Route>
                    <Route  path="/Stream/Create"             component={StreamCreate} ></Route>
                    <Route  path="/Stream/Edit/:id"           component={StreamEdit}   ></Route>      
                    <Route  path="/Stream/Delete/:id"         component={StreamDelete} ></Route>
                    <Route  path="/Stream/Show/:id"         component={StreamShow} ></Route>
                </div>
            </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {gstate : state};
};

export default connect(mapStateToProps) (App);
