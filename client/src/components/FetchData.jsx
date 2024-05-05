const url = 'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product?url=https%3A%2F%2Fwww.walmart.com%2Fip%2FMedia-Remote-for-PlayStation-5%2F381848762';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '490d9cb638msh0ed65a8fa5459d6p12e50cjsncfe411ccb219',
		'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}