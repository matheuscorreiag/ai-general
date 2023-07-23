import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const POST = async ({ request }) => {
	const body = await request.json();

	console.log('body: ', body);

	const response = await fetch('https://api.openai.com/v1/images/generations', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${env.OPENAI_API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			prompt: body.prompt,
			n: 3,
			size: '512x512'
		})
	}).then((response) => response.json());

	return json(response);
};
