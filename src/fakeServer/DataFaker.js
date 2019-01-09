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

const headerMaker = () => {
    return {
        ENG: `${heading()}`,
        SPA: `ES ${heading()}`
    }
};

const paragraphMaker = () => {
    return {
        ENG: `${paragraph()}`,
        SPA: `ES ${paragraph()}`
    }
};

const articleMaker = () => {
    const length = randomLength(7, 1);
    let list = [];
    for ( let i = 0; i < length; i++ ) {
        list.push( paragraphMaker() );
    }
    return list;
};

const fieldContent = ( type, id ) => {
    switch (type.toString()) {
        case 'header':
            return headerMaker();
        case 'text':
            return articleMaker();
        case 'id':
            return id;
}};

const singleEntryMaker = ( configObj, id ) => {
    const entry = {};
    for (const key in configObj) {
        entry[key] = fieldContent( configObj[key], id );
    }
    return entry;
};

const dataFaker = (minLength, lenghtRange, configObject ) => {
    const length = randomLength(lenghtRange, minLength);
    let data = {};
    for ( let i = 0; i < length; i++ ) {
        const id = uniqid();
        data[id] = singleEntryMaker(configObject, id);
    }
    return data;
};

export default dataFaker;