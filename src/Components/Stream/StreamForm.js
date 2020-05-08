import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class StreamForm extends Component {

    inputRender1({input, meta}) {
        return (
            <div className="mb-2">
                <div className="input-group  w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                    </div>
                    <input {...input} type="text"  autoComplete="off" className="form-control" placeholder="Stream Title" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                {meta.error&&meta.touched ? meta.error : null}
            </div>
        )
    }

    inputRender2({input, meta}) {
        return (
            <div className="mb-2">
                <div className="input-group  w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Discription</span>
                    </div>
                    <input {...input} type="text" autoComplete="off"  className="form-control" placeholder="Stream discription" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                {meta.error&&meta.touched ? meta.error : null}
            </div>
        )
    }

    mySubmitHandler = (formValues) => {
        this.props.onSubmit(formValues);    
    }
    
    render() {
            return (
                <form onSubmit={this.props.handleSubmit(this.mySubmitHandler)} className="p-3">
                    <Field name="title" component={this.inputRender1}/>
                    <Field name="discription" component={this.inputRender2}/>
                    <input className="btn btn-success" type="submit"/>
                </form>
            );
        } 
}

const validateMachine = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "you must enter a title";
    }

    if(!formValues.discription) {
        errors.discription = "you must enter a Discription";
    }

    return errors;
}

export default reduxForm({form:"StreamForm",validate : validateMachine}) (StreamForm);
