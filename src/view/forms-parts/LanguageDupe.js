import React from 'react';
import { connect } from "formik";

const languages = [ {
    constant: 'ENG',
    displayName: 'English'
}, {
    constant: 'SPA',
    displayName: 'Spanish'
} ];

const LanguageDupe = ({ formik, label, name, placeholder, children, childLabel }) =>
{
    console.log('LanguageDupe - ', name)
    return (<fieldset name={name}>
    <legend>{label}</legend>
    { languages.map((language, langIndex) => { console.log('LanguageDupe - ', name, language.displayName); return (
        <React.Fragment key={language.constant}>
            { React.cloneElement(
                React.Children.only(children),
                {
                    name: name,
                    // name: `${name}.${language.constant}`,
                    // purename: `${name}`,
                    lang: language.constant,
                    label: childLabel ?`${childLabel} - ${language.displayName}` : null,
                    placeholder: placeholder ? `${placeholder} - ${language.displayName}` : language.displayName
                }
        )}
        </React.Fragment>
    )})}
</fieldset>)}


export default connect(LanguageDupe);