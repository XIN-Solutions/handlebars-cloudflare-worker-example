import Handlebars from 'handlebars/runtime.js';

import '../assets/pages.js';
import '../assets/partials.js';

import {hbsAsyncRender, registerAsyncHelper} from "hbs-async-render";


/**
 * Register an asynchronous helper that waits for a second and then resolves with some information
 * that is going to be rendered in the place where `asyncTest` has been used in the Handlebar templates.
 */
registerAsyncHelper(Handlebars,'asyncTest', function (options, context) {

	return new Promise((resolve, reject) => {
		setTimeout(
			function() {
				resolve(`Async render with params: ${options.hash.name} || ${options.hash.age}`)
			},
			200
		);
	});

})


export default {
	async fetch(request) {

		const reqUrl = new URL(request.url);

		//
		// 	Only serve this html on the `/` path.
		//
		if (reqUrl.pathname === '/') {
			const output = await hbsAsyncRender(Handlebars, 'body', {name: "Customer Name"});
			return new Response(output, {headers: {'Content-Type': 'text/html'}});
		}

		return new Response("Not found.", {status: 404});
	},
};
