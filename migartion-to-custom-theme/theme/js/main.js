$(function() {
    var loadingElement = document.createElement("div");
		loadingElement.id = "loading";

	var loadingContainer = document.createElement("div");
		loadingContainer.className = "loading-container";

	var divElement = document.createElement("div");

	var text = document.createElement("p");
		text.className = "text";
		text.innerHTML = "Loading..."

		divElement.appendChild(text);

		loadingContainer.appendChild(divElement);

		loadingElement.appendChild(loadingContainer);

	$(".reveal").prepend(loadingElement);
});
