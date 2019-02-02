import React from 'react';
import {connect, Field, FieldArray} from "formik";

const InputArray = ({ formik, origin, lang, element }) => {

    const name = `${origin}.${lang}`;
    const target = formik.values[origin][lang];

    return <FieldArray
        name={name}
        render={ arrayHelpers => {
            return (

                <fieldset>
                    <legend>{lang} - {name}</legend>
                    {target && target.length > 0 ? (
                        target.map((item, index) => (
                            <div key={index}>
                                <Field
                                    type={element ? element : 'text'}
                                    component={element || undefined}
                                    name={`${name}.${index}`}
                                />
                                <button
                                    type='button'
                                    onClick={() => arrayHelpers.remove(index)}
                                >Delete</button>
                                {
                                    index === (target.length - 1) ? (<button
                                        type='button'
                                        onClick={() => arrayHelpers.push('')}
                                        disabled={target[index].length < 3}
                                    >{'Add another '}</button>) : null
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
};

export default connect(InputArray);