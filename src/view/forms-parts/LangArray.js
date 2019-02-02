import React from 'react';
import {connect, Field, FieldArray} from "formik";

const languages = [ {
    constant: 'ENG',
    displayName: 'English'
}, {
    constant: 'SPA',
    displayName: 'Spanish'
} ];

const LangArray = ({formik, name, label, childLabel, placeholder, cssClass, children}) =>
<FieldArray
    name={name}
    render={ arrayHelpers =>
        <fieldset>
            <legend>{label}</legend>
            {languages.map((lang, langIndex) => (
                <div key={lang.constant+langIndex}>{React.cloneElement(
                    React.Children.only(children),
                    {
                        name: name,
                        lang: lang.constant,
                        label: childLabel ?`${childLabel} - ${lang.displayName}` : null,
                        placeholder: placeholder ? `${placeholder} - ${lang.displayName}` : lang.displayName
                    }
                )}</div>

            ))}
        </fieldset>
    }
/>

export default connect(LangArray);