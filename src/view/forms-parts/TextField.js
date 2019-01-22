import React from 'react';
import { Field } from "formik";

const TextField = ({ field, form, placeholder, label=null, element = false, error, area, disable, cssClass }) => {
    console.log('props', { field, form, label, error, disable, cssClass });
    return <label>

        { label && <p>{label}</p>}
        <Field
            type={element ? 'textarea' : 'text'}
            component={element || undefined}
            name={field.name}
            className={cssClass || ''}
            placeholder={placeholder || ''}
        />
        { error && <p>{error}</p>}

    </label>

};

export default TextField;