//--Facebook script for "Custom" buttons--//
$(document).ready(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=1517689598316225';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//-- end of custom script--//

//--Facebook link--//
       window.fbAsyncInit = function() {
      FB.init({
        appId            : '1994680544133095',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.11'
      })
    }

function fb_login(){
    FB.login(function() {
    var e = document.createElement('script');
    e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
    e.async = true;
    document.getElementById('fb-root');
}());