$(function() {
  $('.reveal').prepend(
    '<div id="loading">' +
    ' <div class="loading-container">' +
    '   <div>' +
	'     <p class="text">' +
    '       Loading' +
    '     </p>' +
	'	</div>' +
    ' </div>' +
    '</div>');

  $('.reveal')
    .append(
      '<div class="social-widget left desk">' +
      ' <strong>Follow us</strong>' +
      ' <br/>' +
      ' <a href="http://telerikacademy.com"><img title="Our website"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/telerik_academy.png" /></a>' +
      ' <a href="https://www.facebook.com/TelerikAcademy"><img title="Follow us"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/facebook.png" /></a>' +
      ' <a href="https://www.youtube.com/user/telerikacademy"><img title="Subscribe"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/youtube.png" /></a>' +
      ' <a href="https://plus.google.com/u/0/+telerikacademy/"><img title="Add us to circles"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/google_plus.png" /></a>' +
      ' <a href="https://www.linkedin.com/groups/3161033"><img title="Follow"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/linkedin.png" /></a>' +
      ' <a href="https://twitter.com/TelerikAcademy"><img  title="Follow" src="https://rawgit.com/TelerikAcademy/Common/master/icons/twitter.png" /></a>' +
      ' <a href="http://feeds.feedburner.com/TelerikAcademy"><img title="Subscribe"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/rss.png" /></a>' +
      '</div>');

  $('.reveal')
    .append(
      '<div class="social-widget left mobile">' +
      ' <strong>Follow us</strong>' +
      ' <div class="buttons">' +
      '   <a href="http://telerikacademy.com"><img title="Our website"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/telerik_academy.png" /></a>' +
      '   <a href="https://www.facebook.com/TelerikAcademy"><img title="Follow us"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/facebook.png" /></a>' +
      '   <a href="https://www.youtube.com/user/telerikacademy"><img title="Subscribe"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/youtube.png" /></a>' +
      '   <a href="https://plus.google.com/u/0/+telerikacademy/"><img title="Add us to circles"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/google_plus.png" /></a>' +
      '   <a href="https://www.linkedin.com/groups/3161033"><img title="Follow"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/linkedin.png" /></a>' +
      '   <a href="https://twitter.com/TelerikAcademy"><img  title="Follow" src="https://rawgit.com/TelerikAcademy/Common/master/icons/twitter.png" /></a>' +
      '   <a href="http://feeds.feedburner.com/TelerikAcademy"><img title="Subscribe"  src="https://rawgit.com/TelerikAcademy/Common/master/icons/rss.png" /></a>' +
      ' </div>' +
      '</div>');

  $('.social-widget.mobile').addClass('hidden');

  // $('.social-widget.mobile a').on('click', function(e) {
  //   e.preventDefault();
  //   return false;
  // });

  $('.social-widget.mobile').on('click', function() {
    $('.social-widget.mobile').toggleClass('hidden');
  });
});
