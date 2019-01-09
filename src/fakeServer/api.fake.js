export const callAPI = ( content ) => new Promise((resolve, reject ) => {
	setTimeout((content) => {
		resolve( { json: content, ok: true } );
	}, 1500, content);
});

/*
use example:

const content = dataFaker(3, 2, {
    id: 'id',
    head: 'header',
    sub: 'header',
    body: 'text'
})

callAPI(content)
    .then( response => {
        if ( response.ok ) {
            return response.json
        } else {
            throw new Error('Something went wrong ...');
        }
    })
    .then(
        data => console.log(data)
    )
    .catch( error => console.log(error));

*/