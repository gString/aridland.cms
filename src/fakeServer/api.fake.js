import createList from './services.fake';

export const servicesAPI = new Promise((resolve, reject ) => {
	setTimeout(() => {
		resolve( { json: createList(), ok: true } );
	}, 1500);
});
