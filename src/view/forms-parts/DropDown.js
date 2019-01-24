import React from 'react';
import { Field } from "formik";

const DropDown = ({ field, form, list, label=null, error, area, disable, cssClass }) => {
    console.log('props', { field, form, label, error, disable, cssClass });
    return <label>

        { label && <p>{label}</p>}
        <Field name={field.name} className={cssClass || ''} component='select'>
            { list.map( item => <option key={item.id} value={item.id}>{item.name.ENG}</option>) }
        </Field>
        { error && <p>{error}</p>}

    </label>

};

export default DropDown;