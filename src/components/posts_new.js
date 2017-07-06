import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return(
            <div className={className}>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        console.log(values);
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                    type="text"
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                    type="text"
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                    type="text"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'A title is required';
    }

    if(!values.categories) {
        errors.categories = 'Categories are required';
    }

    if(!values.content) {
        errors.content = 'Content is required';
    }

    return errors;
}

export default reduxForm({
    validate, //es6 the same as validate: validate
    form: 'PostsNewForm'
})(PostsNew);