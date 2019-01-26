import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage, FormikProps, Form, Field } from 'formik';

class ProjectFormBU extends Component {

    constructor(props) {
        super(props);

        //  state
        this.state = {};

        //  Bind functions

    }

    handleSubmit = (values, {
        props = this.props,
        setSubmitting
    }) => {
        setSubmitting(false);
        return;
    }

    render() {
        return (
            <Formik
                initialValues={{
                    id: 'id',
                    name: 'header',
                    province: 'header',
                    country: 'header',
                    rules: [],
                    size: 'header',
                    intro: 'text',
                    description: 'text',
                    gallery: [],
                    media: []
                }}
                validate={ values => {
                    let errors = [];
                    return errors;
                }}
                onSubmit={handleSubmit}
                render={formProps: FormikProps => {
                    return (
                        <Form>
                            <Field
                                type='text'
                                name='name'
                                placeholder='project name in English'
                                className='textBox'
                            />
                            <ErrorMessage name='name'/>
                            <Field/>
                            <Field/>
                            <button
                            type='submit'
                            disabled={formProps.isSubmitting}>
                                Submit Form
                            </button>
                        </Form>
                    );
                    }}
            />);
    }
}

ProjectFormBU.PropTypes = {};

export default ProjectFormBU;