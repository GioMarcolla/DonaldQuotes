const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com",
		"x-rapidapi-key": "6cc3d812b8msha58c205b90ae9fcp14c9dbjsnb526f890ecec",
		"accept": "application/hal+json"
	}
}

let getQuotes = () => {
    for(let ii = 0; ii < 27; ii++){
        $.ajax(settings).done((response) => {
            var cardsDiv = $("#DonaldCards");

            const data = response;

            const img = (Math.floor(Math.random() * 5) + 1).toString() + ".jpg";
            const imgTag = '<img src="./DonaldPics/CardPics/' + img + '" class="card-img-top">';

            const quote = data.value;
            const quoteTag = '<p class="mb-0">' + quote + '</p>';
            const footerTag = '<footer class="blockquote-footer">Donald Trump <cite title="Source Title"> Most likely on Twitter!</cite></footer>';
            const blockTag = '<blockquote class="blockquote">' + quoteTag + footerTag + '</blockquote>';
            const cardBody = '<div class="card-body">' + blockTag + '</div>';

            const tags = data.tags;
            let tagsList = '<div class="container-fluid">';
            tags.forEach((tag) => {
                const tagTag = '<li class="list-inline-item"></li>' + tag + '</li>';
                tagsList += tagTag;
            })
            tagsList += '</div>';

            const tagsContainer = '<div class="container-fluid">' + tagsList + '</div>';

            const card = '<div class="card" style="width: 18rem; margin: 30px 0;">' + imgTag + cardBody + tagsContainer + '</div>';

            const col = '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">' + card + '</div>';
            cardsDiv.append(col);
        });
    }
}

document.addEventListener("keydown", (e) => {
    if(e.which === 32) getQuotes();
});