import loremIpsum from 'lorem-ipsum';
import uniqid from 'uniqid';

const paragraph = () => {
    return loremIpsum({
        count: 1                      // Number of words, sentences, or paragraphs to generate.
        , units: 'paragraphs'            // Generate words, sentences, or paragraphs.
        , sentenceLowerBound: 5         // Minimum words per sentence.
        , sentenceUpperBound: 12        // Maximum words per sentence.
        , paragraphLowerBound: 2        // Minimum sentences per paragraph.
        , paragraphUpperBound: 8        // Maximum sentences per paragraph.
        , format: 'plain'               // Plain text or html
    });
};

const heading = () => {
    return loremIpsum({
        count: 1                      // Number of words, sentences, or paragraphs to generate.
        , units: 'sentences'            // Generate words, sentences, or paragraphs.
        , sentenceLowerBound: 2         // Minimum words per sentence.
        , sentenceUpperBound: 7			// Maximum words per sentence.
        , paragraphLowerBound: 2        // Minimum sentences per paragraph.
        , paragraphUpperBound: 8        // Maximum sentences per paragraph.
        , format: 'plain'               // Plain text or html
    });
};

const randomLength = (range, min) => {
    return Math.round(Math.random() * range) + min;
};

// check for the actual content type
const contentMaker = (type, id, lang) => {
    const prefix = lang === 'SPA' ? 'ES ' : '';
    switch (type.toString()) {
        case 'header':
            return prefix + heading();
        case 'text':
            return prefix + paragraph();
        case 'id':
            return id;
    }
}

// is it array of data (multi paragraph)?
const fieldContent = (type, id, lang, array) => {
    if (array) {
        let arr = [];
        for ( let n = 0; n < array; n++) {
            arr.push( contentMaker(type, id, lang) );
        }
        return arr;
    }
    return contentMaker(type, id, lang)
}

// Do I need language-specific data?
const fieldMaker = (fieldConfig, id) => {
    const { single, type, array } = fieldConfig;
    if ( single ) return fieldContent(type, id, null, array);
    return {
        ENG: fieldContent(type, id, null, array),
        SPA: fieldContent(type, id, 'SPA', array)
    }
}

// single data entry
const entryMaker = ( configObj, id ) => {
    const entry = {};
    for (const key in configObj) {
        entry[key] = fieldMaker(configObj[key], id);
    }
    console.log('entry',JSON.stringify(entry))
    return entry;
};

const dataFaker = ( minLength, lengthRange, configObject ) => {
    const length = randomLength(lengthRange, minLength);
    let data = {};
    for ( let i = 0; i < length; i++ ) {
        const id = uniqid();
        data[id] = entryMaker(configObject, id);
    }
    console.log('data',data)
    return data;
};

export default dataFaker;