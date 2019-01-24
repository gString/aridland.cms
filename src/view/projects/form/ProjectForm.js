import React from 'react';
import {connect} from "react-redux";
import {Formik, Form, Field, FieldArray } from "formik";
import Yup from 'yup';

import {currentProject, projectsSelector} from "../../../model/selectors";
import TextField from "../../forms-parts/TextField";

const ProjectForm = () => {
    return <Formik
        initialValues={{
            name: {
                eng: 'english',
                spa: 'spanish'
            },
            size: {
                eng: 'senglish',
                spa: 'sspanish'
            },
            intro: {
                eng: ['1senglishArray','2senglish',],
                spa: 'sspanishArr'
            }
        }}
        validationSchema={ () => {
            Yup.object().shape({
                name: {
                    eng: Yup.string().min(3).require(),
                    spa: Yup.string().min(3).require()
                },
                size: {
                    eng: Yup.string().min(3).require(),
                    spa: Yup.string().min(3).require()
                },
            })
        }}
        onSubmit={values => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
            }, 500);
        }}
        render={ ({values, errors,
                      touched,
                      isSubmitting})=> (
            <Form>
                <fieldset>
                    {/*<TextField name='name' lang='eng' label='Name in Englich' placeholder='platz older'/>*/}

                        <Field
                            name='name.eng'
                            component={TextField}
                            placeholder='project name in English'
                            className='textBox'
                            label='max'
                        />

                        <Field
                            type='text'
                            name='name.spa'
                            placeholder='project name in Spanish'
                            className='textBox'
                        />
                    { touched.name.spa && errors.name.spa && <p>{errors.name.spa}</p> }
                </fieldset>
                <fieldset>
                        <Field
                            type='text'
                            name='size.eng'
                            placeholder='project size in English'
                            className='textBox'
                        />
                        <Field
                            type='text'
                            name='size.spa'
                            placeholder='project size in Spanish'
                            className='textBox'
                        />
                </fieldset>
                <fieldset>
                    <FieldArray name='intro.eng'
                                render={ (arrayHelpers => (
                                    <div>
                                    {values.intro.eng && values.intro.eng.length > 0 ? (
                                            values.intro.eng.map((text, index) => (
                                                <div key={index}>
                                    <Field
                                        name={`intro.eng.${index}`}
                                        component='textarea'
                                        placeholder='introduction in English'
                                        className='textBox'
                                    />
                                                </div>))):(<p>nothing</p>)}
                                    </div>

                                ))} />
                        <Field
                            component='textarea'
                            name='intro.spa'
                            placeholder='introduction size in Spanish'
                            className='textBox'
                        />
                </fieldset>
                <button type='submit'>Submit</button>
            </Form>
        )}
    />
};

const mapStateToProps = state => {
    return {
        project: currentProject(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // project: currentProject(state)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectForm);