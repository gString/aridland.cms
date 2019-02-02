import React from 'react';
import {withFormik, Form, Field, FieldArray} from "formik";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {compose} from "recompose";

import TextField from "../forms-parts/TextField";
import DropDown from "../forms-parts/DropDown";
import {countriesAsArraySelector, currentProjectSelector} from "../../model/selectors";
import {formInitValues, formSchema} from './FormHelpers'
import LangArray from "../forms-parts/LangArray";
import InputArray from "../forms-parts/InputArray";


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

const languages = [ {
    constant: 'ENG',
    displayName: 'English'
}, {
    constant: 'SPA',
    displayName: 'Spanish'
} ];





const enhanced = compose(
    withFormik({
        mapPropsToValues: ({ project }) => formInitValues(project),
        /*validationSchema: formSchema(),*/
        handleSubmit: values => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
            }, 500);
        },
        enableReinitialize: true,
        validateOnChange: false,
        validateOnBlur: false
    }),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
);

const ProjectEditForm = enhanced((props ) => {console.log('ProjectEditForm',props);
                              let {
                                  project,
                                  countries,
                                  values,
                                  errors,
                                  touched,
                                  isSubmitting
                              } = props;return (
        <Form>
            {/* Name */}
            <LangArray
                name='name'
                label='Project Name'
            >
                <Field
                    component={TextField}
                    placeholder='Project name'
                />
            </LangArray>

            {/* Country */}
            <Field
                name='country'
                label='Country'
                component={DropDown}
                list={countries}
            />

            {/* Province */}
            <LangArray
                name='province'
                label='Location'
                placeholder='Location (province, town)'
            >
                <Field
                    component={TextField}

                />
            </LangArray>

            {/* Rules */}
            {
                languages.map( (lang, _index) => {
                    return <InputArray
                        key={lang.constant}
                        origin='rules'
                        lang={lang.constant}
                    />})
            }

            {/* Size */}
            <LangArray
                name='size'
                label='Size'
                placeholder='Project size'
            >
                <Field
                    component={TextField}

                />
            </LangArray>

            {/* Intro */}
            {
                languages.map( (lang, _index) => {
                    return <InputArray
                        key={lang.constant}
                        origin='intro'
                        lang={lang.constant}
                        element={'textarea'}
                    />})
            }

            {/* Description */}
            {
                languages.map( (lang, _index) => {
                    return <InputArray
                        key={lang.constant}
                        origin='intro'
                        lang={lang.constant}
                        element={'textarea'}
                    />})
            }
        </Form>
    )}
);


export default ProjectEditForm;