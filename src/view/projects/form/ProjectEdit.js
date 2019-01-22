import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import TextField from "../../forms-parts/TextField";

const ProjectEdit = ({
                         values,
                         errors,
                         touched,
                         isSubmitting
}) => (
    <Form>
        <Field
            name='name'
            component={TextField}
            placeholder='placeholder'
            label='Project Name'
        />
        <Field
            name='size'
            component={TextField}
            placeholder='3000'
            label='Size'
            element='textarea'
        />
    </Form>
);

const EnhancedProjectForm = withFormik({
    mapPropsToValues: ({
                           name,
                           province,
                           country,
                           rules,
                           size,
                           intro,
                           description,
                           gallery,
                           media
                        }) => ({
        name: name || '',
        province: province || [],
        country: country || [],
        rules: rules || [],
        size: size || '',
        intro: intro || [],
        description: description || [],
        gallery: gallery || [],
        media: media || []
    }),
    validationSchema:
        Yup.object().shape({
            name: Yup.string().min(3).max(16).required(),
            province: Yup.array().of(Yup.string()).min(1).required(),
            country: Yup.array().of(Yup.string()).min(1).required(),
            rules: Yup.array().of(Yup.string()).min(1),
            size: Yup.string().required(),
            intro: Yup.array().of(Yup.string()).min(1),
            description: Yup.array().of(Yup.string()).min(1),
            gallery: Yup.array().of(Yup.string()).min(1),
            media: Yup.array().of(Yup.string())
        }),
    handleSubmit: values => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
        }, 500);
    }
})(ProjectEdit);

export default EnhancedProjectForm;