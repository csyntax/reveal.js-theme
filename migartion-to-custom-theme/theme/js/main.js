$(function() {
    /*$(".reveal").prepend(`
        <div id="loading">
            <div class="loading-container">
                <div>
                    <p class="text">Loading</p>
                </div>
            </div>
        </div>
    `);*/

   /* $(".reveal").append(`
        <div class="social-widget left desk">
            <strong>Follow me</strong>
            <br/>
            <a href="https://www.facebook.com/csyntaxbg">
                <img src="../images/facebook.png" />
            </a>
        </div>
    `);*/

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
