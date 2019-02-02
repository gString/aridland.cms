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

const InputList = ({formik, name, lang, label, element, placeholder, cssClass}) =>
<FieldArray
    name={name}
        render={ arrayHelpers => {
            // const target = formik.values[name][lang];
            return (

            <fieldset>
                <legend>{label} / {element}</legend>

                {/*<p>{JSON.stringify(arrayHelpers)}</p>*/}
                <p>{JSON.stringify(arrayHelpers)}</p>
                {formik.values[name][lang] && formik.values[name][lang].length > 0 ? (
                    formik.values[name][lang].map((rule, index) => (
                        <div key={index}>
                            <p>{element}</p>
                            <Field
                                type={element ? element : 'text'}
                                component={element || undefined}
                                name={`${name}.${lang}.${index}`}
                                className={cssClass || ''}
                                placeholder={placeholder || `New ${itemDescription(element)}`}
                            />
                            <button
                                type='button'
                                onClick={() => arrayHelpers.remove(index)}
                            >Delete</button>
                            {
                                index === (formik.values[name][lang].length - 1) ? (<button
                                    type='button'
                                    onClick={() => arrayHelpers.push('')}
                                    disabled={formik.values[name][lang][index].length < 3}
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

        )}}
    />

export default connect(InputList);