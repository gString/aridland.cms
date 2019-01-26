import React from 'react';
import {withFormik, Form, Field} from "formik";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {compose} from "recompose";

import TextField from "../forms-parts/TextField";
import DropDown from "../forms-parts/DropDown";
import {countriesAsArraySelector, currentProjectSelector} from "../../model/selectors";
import InputList from "../forms-parts/InputList";
import {formInitValues, formSchema} from './FormHelpers'


const mapStateToProps = state => {
    return {
        project: currentProjectSelector(state),
        countries: countriesAsArraySelector(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // project: currentProjectSelector(state)
    }
};




const enhanced = compose(
    withFormik({
        mapPropsToValues: ({ project }) => formInitValues(project),
        validationSchema: formSchema(),
        handleSubmit: values => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
            }, 500);
        },
        enableReinitialize: true
    }),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
);

const ProjectEditForm = enhanced(({
                                  project,
                                  countries,
                                  values,
                                  errors,
                                  touched,
                                  isSubmitting
                              }, props ) => {console.log('ProjectEditForm',props);return (
        <Form>
            <Field
                name='name'
                component={TextField}
                placeholder='placeholder'
                label='Project Name'
            />
            <Field
                name='country'
                component={DropDown}
                list={countries}
                label='Country'
            />
            <Field
                name='province'
                component={TextField}
                placeholder='Location (province, town)'
                label='Location'
            />
            <InputList
                name='rules'
                label='Rules'
            />
            <Field
                name='size'
                component={TextField}
                placeholder='3000'
                label='Size'
            />
            <InputList
                name='intro'
                label='Short Introduction'
                element='textarea'
            />
            <InputList
                name='description'
                label='Detailed Description'
                element='textarea'
            />
        </Form>
    )}
);


export default ProjectEditForm;