export const POST = async ({ request }) => {
	const { body } = request;
	const response = await fetch('https://api.openai.com/v1/images/generations', {
		method: 'POST',
		headers: {
			Authorization: `Bearer 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`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			prompt: 'A horse',
			n: 1,
			size: '1024x1024'
		})
	});

	return await response.json();
	console.log(response);
};
