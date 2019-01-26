import React from 'react';
import {Field, Form} from 'formik';

const TextList = ({ form, name, element, placeholder, push, remove, label=null, cssClass}) => {
    console.log('element==',element)
    console.log('form==',form)
    return <div>
        <div>
            {form.values[name] && form.values[name].length > 0 ? (
                form.values[name].map((rule, index) => (
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
                            onClick={() => remove(index)}
                        >Delete
                        </button>
                        {
                            index === (form.values[name].length - 1) ? (<button
                                type='button'
                                onClick={() => push('')}
                                disabled={form.values[name][index].length < 3}
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

export default TextList;