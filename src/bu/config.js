import Yup from 'yup';


export const initialValues = {
    id: 'id',
    name: 'header',
    province: 'header',
    country: 'header',
    rules: [],
    size: 'header',
    intro: 'text',
    description: 'text',
    gallery: [],
    media: []
};

export const projectValidationSchema = () => ({
    Yup.object().shape({
        name: Yup.string().min(3).max(16).required(),
        province: Yup.string().required(),
        country: Yup.string().required(),
        rules: Yup.array().of(Yup.string()).min(1),
        size: Yup.string().required(),
        intro: Yup.array().of(Yup.string()).min(1),
        description: Yup.array().of(Yup.string()).min(1),
        gallery: Yup.array().of(Yup.string()).min(1),
        media: Yup.array().of(Yup.string())
    })
});