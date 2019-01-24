import React from 'react';
import {connect, Field, FieldArray} from "formik";

const InputList = ({formik, name, label, element, placeholder, cssClass}) =>
<FieldArray
    name={name}
        render={ arrayHelpers => (

            <div>
                {formik.values[name] && formik.values[name].length > 0 ? (
                    formik.values[name].map((rule, index) => (
                        <div key={index}>
                            <p>{element}</p>
                            <Field
                                type={element ? element : 'text'}
                                component={element || undefined}
                                name={`${name}.${index}`}
                                className={cssClass || ''}
                                placeholder={placeholder || ''}
                            />
                            <button
                                type='button'
                                onClick={() => arrayHelpers.remove(index)}
                            >Delete
                            </button>
                            {
                                index === (formik.values[name].length - 1) ? (<button
                                    type='button'
                                    onClick={() => arrayHelpers.push('')}
                                    disabled={formik.values[name][index].length < 3}
                                >Add Paragraph</button>) : null
                            }
                        </div>)
                    )) : (
                    <button
                        type='button'
                        onClick={() => arrayHelpers.push('')}
                    >Click to get stated!
                        <br/><span>(open a text box for the first paragraph)</span>
                    </button>
                )}
            </div>

        )}
    />

export default connect(InputList);