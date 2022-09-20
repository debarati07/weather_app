/** @format */

const f = document.querySelector('.search');
const n = document.querySelector('.city_name');

const card = document.querySelector('.body');
const picture = document.querySelector('.card');
console.log(picture);
const details = document.querySelector('.details');

const updatecity = async (city) => {
	const citydetails = await get_city(city);
	const weatherdetails = await get_weather(citydetails.Key);

	return {
		citydets: citydetails,
		weatherdets: weatherdetails,
	};
};

const updateUI = (data) => {
	console.log(data);
	const city_details = data.citydets;
	const weather = data.weatherdets;

	if (card.classList.contains('show')) {
		card.classList.remove('show');
	}
	details.innerHTML = `
    <p class="city_value">${city_details.EnglishName.toUpperCase()}</p>
					<p class="climate_type"> ${weather.WeatherText}</p>
					<p class="temperature">${
						weather.Temperature.Metric.Value
					} <span>&#176;</span><span>${
		weather.Temperature.Metric.Unit
	}</span></p>
                    `;
	let imgSrc;
    console.log(weather.IsDayTime)
	console.log(weather.IsDayTime);
	if (weather.IsDayTime) {
		imgSrc = 'images/day.jpg';
	} else {
		imgSrc = 'images/night.jpg';
	}
	picture.setAttribute('src', imgSrc);
};
f.addEventListener('submit', (e) => {
	e.preventDefault();
	const city_name = n.value.trim();
	updatecity(city_name)
		.then((data) => {
			console.log(data);
			updateUI(data);
		})
		.catch((err) => {
			console.log(err);
		});
	f.reset();
});
