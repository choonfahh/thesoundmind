<script>
window.fbAsyncInit = function() {
  FB.init({
    appId            : '830284183804997',
    autoLogAppEvents : true,

    status           : true,
    xfbml            : true,
    version          : 'v2.10'
  });

  FB.AppEvents.logPageView();
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>


componentDidMount() {
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token
        // and signed request each expire
        var uid = response.authResponse.userID;
        console.log(response);
        console.log(uid);
        var accessToken = response.authResponse.accessToken;
        console.log(accessToken);
      } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook,
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
      }
    }, true);
  };
}

FB.login(function(response) {
  if (response.authResponse) {
   FB.api('/me', {fields: 'name, email, verified'}, function(response) {
     console.log(response);
     console.log('Good to see you, ' + response.name + '.');
   });
  } else {
   console.log('User cancelled login or did not fully authorize.');
  }
});
