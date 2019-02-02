import * as Yup from "yup";

export const formInitValues = project => {
    if (project) {
        return ({
            name: {
                ENG: project.name.ENG || '',
                SPA: project.name.SPA || '',
            } ,
            size: {
                ENG: project.size.ENG || '',
                SPA: project.size.SPA || '',
            } ,
            province: {
                ENG: project.province.ENG || '',
                SPA: project.province.SPA || '',
            } ,
            country: project.country || '',
            rules: {
                ENG: project.rules.ENG || [],
                SPA: project.rules.SPA || [],
            } ,
            intro: {
                ENG: project.intro.ENG || [],
                SPA: project.intro.SPA || [],
            } ,
            description: {
                ENG: project.description.ENG || [],
                SPA: project.description.SPA || [],
            } ,
            gallery: project.gallery || [],
            media: project.media.ENG || [],
        })
    } else {
        return ({
            name: {ENG: '', SPA: ''},
            province: {ENG: '', SPA: ''},
            country: '',
            rules: {ENG: [], SPA: []},
            size: {ENG: '', SPA: ''},
            intro: {ENG: [], SPA: []},
            description: {ENG: [], SPA: []},
            gallery: [],
            media: [],
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
