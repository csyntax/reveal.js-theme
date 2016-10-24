$(function() {
    $(".reveal").prepend(`
        <div id="loading">
            <div class="loading-container">
                <div>
                    <p class="text">Loading</p>
                </div>
            </div>
        </div>
    `);

    $(".reveal").append(`
        <div class="social-widget left desk">
            <strong>Follow me</strong>
            <br/>
            <a href="https://www.facebook.com/csyntaxbg">
                <img title="Follow us"  src="../images/facebook.png" />
            </a>
        </div>
    `);
});