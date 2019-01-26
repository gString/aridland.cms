import React from 'react';
import {Field, Form} from 'formik';
import TextField from "../view/forms-parts/TextField";

const ParagraphArray = ({ form, name, push, remove, label=null, cssClass}) => {
    console.log(name)
    console.log('form.values[name]', Array.isArray(form.values[name]), form.values[name]);
    return <div>
        <div>
            {form.values[name] && form.values[name].length > 0 ? (
                form.values[name].map((rule, index) => (
                    <div key={index}>
                        <Field
                            name={`${name}.${index}`}
                            component={TextField}
                            placeholder='New paragraph'
                            element='textarea'
                        />
                        <button
                            type='button'
                            onClick={() => remove(index)}
                        >Delete
                        </button>
                        {
                            form.values[name] && index === (form.values[name].length - 1) ? (<button
                                type='button'
                                onClick={() => push('')}
                            >Add Paragraph</button>) : null
                        }
                    </div>)
                )) : (
                <button
                    type='button'
                    onClick={() => push('')}
                >Click to get stated!
                    <br/><span>(open a text box for the first paragraph)</span>
                </button>
            )}
        </div>

    </div>
};

export default ParagraphArray;