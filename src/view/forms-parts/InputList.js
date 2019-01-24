import React from 'react';
import {connect, Field, FieldArray} from "formik";

const itemDescription = element => {
    switch (element) {
        case 'textarea':
            return 'paragraph';
        default:
            return 'line';
    }
};

const InputList = ({formik, name, label, element, placeholder, cssClass}) =>
<FieldArray
    name={name}
        render={ arrayHelpers => (

            <fieldset>
                <legend>{label}</legend>
                {formik.values[name] && formik.values[name].length > 0 ? (
                    formik.values[name].map((rule, index) => (
                        <div key={index}>
                            <p>{element}</p>
                            <Field
                                type={element ? element : 'text'}
                                component={element || undefined}
                                name={`${name}.${index}`}
                                className={cssClass || ''}
                                placeholder={placeholder || `New ${itemDescription(element)}`}
                            />
                            <button
                                type='button'
                                onClick={() => arrayHelpers.remove(index)}
                            >Delete</button>
                            {
                                index === (formik.values[name].length - 1) ? (<button
                                    type='button'
                                    onClick={() => arrayHelpers.push('')}
                                    disabled={formik.values[name][index].length < 3}
                                >{'Add another '+itemDescription(element)}</button>) : null
                            }
                        </div>)
                    )) : (
                    <button
                        type='button'
                        onClick={() => arrayHelpers.push('')}
                    >Click to get started!</button>
                )}
            </fieldset>

        )}
    />

export default connect(InputList);