import React from 'react';
import {withFormik, Form, Field, FieldArray} from "formik";
import * as Yup from 'yup';
import {compose} from "recompose";

import TextField from "../../forms-parts/TextField";
import DropDown from "../../forms-parts/DropDown";
import {connect} from "react-redux";
import {countriesAsArraySelector, currentProject} from "../../../model/selectors";
import TextList from "../../../bu/TextList";
import InputList from "../../forms-parts/InputList";


const mapStateToProps = state => {
    return {
        project: currentProject(state),
        countries: countriesAsArraySelector(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // project: currentProject(state)
    }
};


const enhanced = compose(
    withFormik({
        mapPropsToValues: ({
                               name,
                               province,
                               country,
                               rules,
                               size,
                               intro,
                               description,
                               gallery,
                               media
                           }) => ({
            name: name || '',
            province: province || [],
            country: country || [],
            rules: rules || [],
            size: size || '',
            intro: intro || [],
            description: description || [],
            gallery: gallery || [],
            media: media || []
        }),
        validationSchema:
            Yup.object().shape({
                name: Yup.string().min(3).max(16).required(),
                province: Yup.array().of(Yup.string()).min(1).required(),
                country: Yup.array().of(Yup.string()).min(1).required(),
                rules: Yup.array().of(Yup.string()).min(1),
                size: Yup.string().required(),
                intro: Yup.array().of(Yup.string()).min(1),
                description: Yup.array().of(Yup.string()).min(1),
                gallery: Yup.array().of(Yup.string()).min(1),
                media: Yup.array().of(Yup.string())
            }),
        handleSubmit: values => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
            }, 500);
        }
    }),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
);

const ProjectEdit = enhanced(({
                                  countries,
                                  values,
                                  errors,
                                  touched,
                                  isSubmitting
                              }) => {
    console.log('countries', countries);
    return (
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
    )
});


export default ProjectEdit;