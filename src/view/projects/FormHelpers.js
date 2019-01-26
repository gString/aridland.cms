import * as Yup from "yup";

export const formInitValues = project => {
    console.log('formInitValues', project)
    if (project) {
        return ({
            name: project.name || '',
            province: project.province || [],
            country: project.country || [],
            rules: project.rules || [],
            size: project.size || '',
            intro: project.intro || [],
            description: project.description || [],
            gallery: project.gallery || [],
            media: project.media || []
        })
    } else {
        return ({
            name: '',
            province: [],
            country: [],
            rules: [],
            size: '',
            intro: [],
            description: [],
            gallery: [],
            media: []
        })
    }
}

export const formSchema = () =>
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
    })
