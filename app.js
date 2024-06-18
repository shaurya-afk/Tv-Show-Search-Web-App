const form = document.querySelector("#_search")
document.body.style.textAlign = 'center';
document.body.style.justifyContent = 'center';

form.addEventListener("submit", async e => {
	e.preventDefault();
	const user_query = form.elements.query.value;
	const config = {params: {q:user_query}};
	const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
	form.elements.query.value = "";
	form.reset();
	createImage(res.data);
	console.log(res.data);
})
	
const createImage = (shows) => {
	const existingImg = document.querySelectorAll("img");
	existingImg.forEach(img => img.remove());

	for(let result of shows){
		if(result.show.image && result.show.image.medium){
			const link = document.createElement("a");
			link.href = `/shows/show.html?title=${encodeURIComponent(result.show.name)}&description=${encodeURIComponent(result.show.summary || '')}&imgDp=${encodeURIComponent(result.show.image.medium)}&genre=${encodeURIComponent(result.show.genres.join(', '))}&lang=${encodeURIComponent(result.show.language)}&ofsite=${encodeURIComponent(result.show.officialSite)}&sitename=${encodeURIComponent(result.show.network.name)}`;
			link.target = "_blank";

			const new_img = document.createElement("img");
			new_img.src = result.show.image.medium;
			new_img.style.margin = `${12}px`;
			new_img.style.padding = `${12}px`;
			new_img.style.borderRadius = `${17}px`;

			link.appendChild(new_img);
			document.body.appendChild(link);
		}
	}
}