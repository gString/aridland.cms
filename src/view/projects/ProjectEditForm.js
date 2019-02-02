import React from 'react';
import {withFormik, Form, Field, FieldArray} from "formik";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {compose} from "recompose";

import TextField from "../forms-parts/TextField";
import DropDown from "../forms-parts/DropDown";
import {countriesAsArraySelector, currentProjectSelector} from "../../model/selectors";
import InputList from "../forms-parts/InputList";
import {formInitValues, formSchema} from './FormHelpers'
import LanguageDupe from "../forms-parts/LanguageDupe";
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
{/*
            <LanguageDupe
                name='name'
                label='Project Name'
            >
                <Field
                    component={TextField}
                    placeholder='placeholder'
                    values={values}
                />
            </LanguageDupe>
*/}

{/*
            <LanguageDupe
                name='country'
                label='Country'
            >
                <Field
                    component={DropDown}
                    list={countries}
                />
            </LanguageDupe>
*/}
{/*
            <LanguageDupe
                name='province'
                label='Location'
                placeholder='Location (province, town)'
            >
                <Field
                    component={TextField}

                />
            </LanguageDupe>
*/}
{/*
            <LangArray
                name='rules'
                label='Rules'
            >
                <InputList/>
            </LangArray>
*/}
{/*
            <LanguageDupe
                name='size'
                placeholder='Size of project'
                label='Size'
            >
                <Field
                    component={TextField}
                />
            </LanguageDupe>
*/}

{/*
                <InputList
                    name='introENG'
                    purename='intro'
                    childLabel='Short Introduction'
                    element='textarea'
                    lang='ENG'
                />
                <InputList
                    name='introSPA'
                    purename='intro'
                    childLabel='Short Introduction'
                    element='textarea'
                    lang='SPA'
                />
*/}

            {
                languages.map( (lang, _index) => {
                    return <InputArray
                        key={lang.constant}
                        origin='intro'
                        lang={lang.constant}
                        element={'textarea'}
                    />})
            }



            {/*

            {languages.map((lang, langIndex) => (
                <InputList
                    key={langIndex}
                    name='intro'
                    lang={lang.constant}
                    label={`Short introduction - ${lang.displayName}`}
                    placeholder={lang.displayName}
                    element='textarea'
                />
            ))}

*/}
{/*
            <LangArray
                name='intro'
                childLabel='Short Introduction'

            >
                <InputList
                    element='textarea'
                />
            </LangArray>
*/}


{/*
            <InputList
                name='description'
                label='Detailed Description'
                element='textarea'
            />
*/}
        </Form>
    )}
);


export default ProjectEditForm;