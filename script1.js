const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f88e42c6cmsh460e74bd63d8c7cp198c58jsn684be3534e78',
		'X-RapidAPI-Host': 'weather167.p.rapidapi.com'
	}
};

fetch('https://weather167.p.rapidapi.com/clima', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));