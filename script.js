let articleScrolling = false;
let articleInterval = null;
clearInterval(articleInterval);

function toggleButton(query, id) {
	let prevSelect = document.querySelector(query);
	if (prevSelect != null) {
		prevSelect.value = false;
	}
	document.getElementById(id + "-button").value = true;
	console.log(document.getElementById(id + "-button").value)
}

function changeSlide(type, shiftTarget, query, id) {
	let article = document.getElementById(type + "-content");
	if (article.style.bottom == "") {
		article.style.bottom = "0%";
	}
	let originalPos = parseInt(article.style.bottom);
	if (originalPos != shiftTarget && !articleScrolling) {
		articleScrolling = true;
		toggleButton(query, id);
		//articleInterval = null;
		clearInterval(articleInterval);
		articleInterval = setInterval(changeFrame, 5);
		function changeFrame() {
			let moveTarget = parseInt(article.style.bottom) + (shiftTarget - originalPos)/25;
			article.style.bottom = moveTarget + "%";
			if (shiftTarget == parseInt(article.style.bottom)) {
				articleScrolling = false;
				clearInterval(articleInterval);
			}
		}
	}
}
