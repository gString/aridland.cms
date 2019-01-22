import PropTypes from 'prop-types';

const requiredText = () => {
    return PropTypes.shape({
        ENG: PropTypes.string.isRequired,
        SPA: PropTypes.string.isRequired
    })
}

const unrequiredText = () => {
    return PropTypes.shape({
        ENG: PropTypes.string,
        SPA: PropTypes.string
    })
}

export const textEntry = required => {
    return required ? requiredText() : unrequiredText();
}

export const projectSchema = () => ({
    id: PropTypes.string.isRequired,
    name: textEntry(true),
    province: textEntry(true),
    country: textEntry(true),
    rules: PropTypes.arrayOf(textEntry(true)).isRequired,
    size: textEntry(true).isRequired,
    intro: PropTypes.arrayOf(textEntry(true)).isRequired,
    description: PropTypes.arrayOf(textEntry(true)).isRequired,
    gallery: PropTypes.any,
    media: PropTypes.any,
    visible: PropTypes.bool
})