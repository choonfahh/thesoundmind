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

handleUser(endpoint) {
  //return new Promise((resolve, reject) => {
    window.fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(
        {
          "data": [
          {
            "type"  : "interactions",
            "attributes": {
              "recommendation_id":,
              "user_id": this.state.fbUserId,
              "contribute": "0",
              "impression": "1",
              "skip": this.state.isSkipped,
              "info_seen":
              "unlock": this.state.isUnlocked,
              "like": this.state.isLiked,
              "favorite": this.state.isFavorite
            }
          }
        ]
        }
      ),
      headers: {
        "Content-Type": "application/vnd.api+json"
      },
      credentials: "same-origin"
    })
    // how do I resolve a 204 response?
    //.then(response => response.json())
    //.then(json => resolve(json))
    //.catch(error => reject(error))
  //})
}

{
    "data": [
        {
            "id": "2204",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/2204"
            },
            "attributes": {
                "location": "Home",
                "activity": "Browse & Chill",
                "mood": "Happy",
                "song-title": "Lost In The Rhythm (ft. Octavia Rose - PiSk Remix)",
                "background-story": null,
                "playback-url": "https://soundcloud.com/flakrecords/jamie-berry-lost-in-the-rhythm-feat-octavia-rose-pisk-remix?in=zentone/sets/electro-swing-collection",
                "artist-name": "Jamie Berry",
                "profile-url": null,
                "contribute": 1,
                "impression": 6,
                "skip": 4,
                "info-seen": 1,
                "unlock": 1,
                "like": 2,
                "favorite": 3,
                "artist-content": null,
                "comments": [
                    {
                        "id": 2204,
                        "content": "Love it!!!"
                    },
                    {
                        "id": 6125,
                        "content": "I love its chill vibes"
                    },
                    {
                        "id": 10046,
                        "content": "This song just makes me even happier I feel like flying!!"
                    }
                ]
            }
        },
        {
            "id": "634",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/634"
            },
            "attributes": {
                "location": "Home",
                "activity": "Creative & Fun",
                "mood": "Happy",
                "song-title": "Doin' Me",
                "background-story": null,
                "playback-url": "https://www.youtube.com/watch?v=7rWDzLUOreo",
                "artist-name": "Mikey Mike",
                "profile-url": null,
                "contribute": 1,
                "impression": 9,
                "skip": 8,
                "info-seen": 5,
                "unlock": 1,
                "like": 8,
                "favorite": 9,
                "artist-content": null,
                "comments": [
                    {
                        "id": 634,
                        "content": "Feel very at ease at home with this"
                    },
                    {
                        "id": 4555,
                        "content": "I get so many great ideas while listening to this, I guess art creates more art!!"
                    },
                    {
                        "id": 8476,
                        "content": "This song brightens up my day when I'm sad, and glorifies it even more when I'm already buzzing ;)"
                    }
                ]
            }
        },
        {
            "id": "1372",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/1372"
            },
            "attributes": {
                "location": "Home",
                "activity": "Shower",
                "mood": "Happy",
                "song-title": "Nothing Else Matters",
                "background-story": null,
                "playback-url": "https://www.youtube.com/watch?v=tAGnKpE4NCI",
                "artist-name": "Metallica",
                "profile-url": null,
                "contribute": 1,
                "impression": 16,
                "skip": 11,
                "info-seen": 12,
                "unlock": 5,
                "like": 0,
                "favorite": 1,
                "artist-content": null,
                "comments": [
                    {
                        "id": 1372,
                        "content": "Feel very at ease at home with this"
                    },
                    {
                        "id": 5293,
                        "content": "I sing along in the shower hahahaha"
                    },
                    {
                        "id": 9214,
                        "content": "When I listen to this song, I smile to myself hahahaha it really makes my day"
                    }
                ]
            }
        },
        {
            "id": "2231",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/2231"
            },
            "attributes": {
                "location": "Home",
                "activity": "Browse & Chill",
                "mood": "Happy",
                "song-title": "Satori Swingin Show",
                "background-story": null,
                "playback-url": "https://soundcloud.com/notyuki/satori-swingin-show?in=zentone/sets/electro-swing-collection",
                "artist-name": "NotYuki",
                "profile-url": null,
                "contribute": 1,
                "impression": 20,
                "skip": 4,
                "info-seen": 8,
                "unlock": 18,
                "like": 12,
                "favorite": 16,
                "artist-content": null,
                "comments": [
                    {
                        "id": 2231,
                        "content": "Feel very at ease at home with this"
                    },
                    {
                        "id": 6152,
                        "content": "When I'm just chillax this is great for accompany"
                    },
                    {
                        "id": 10073,
                        "content": "When I listen to this song, I smile to myself hahahaha it really makes my day"
                    }
                ]
            }
        },
        {
            "id": "2242",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/2242"
            },
            "attributes": {
                "location": "Home",
                "activity": "Browse & Chill",
                "mood": "Happy",
                "song-title": "Puttin' on the Ritz 2017 (Jazzy Radio Edit ft. TomX)",
                "background-story": null,
                "playback-url": "https://soundcloud.com/electroswing-revolution/puttin-on-the-ritz-2017-jazzy-radio-edit-feat-tomx?in=zentone/sets/electro-swing-collection",
                "artist-name": "Taco",
                "profile-url": null,
                "contribute": 1,
                "impression": 21,
                "skip": 4,
                "info-seen": 14,
                "unlock": 16,
                "like": 20,
                "favorite": 11,
                "artist-content": null,
                "comments": [
                    {
                        "id": 2242,
                        "content": "Love it!!!"
                    },
                    {
                        "id": 6163,
                        "content": "I listen to this when I surf the web and read random memes haha"
                    },
                    {
                        "id": 10084,
                        "content": "This song just makes me even happier I feel like flying!!"
                    }
                ]
            }
        },
        {
            "id": "478",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/478"
            },
            "attributes": {
                "location": "Home",
                "activity": "Browse & Chill",
                "mood": "Happy",
                "song-title": "Vikingman",
                "background-story": null,
                "playback-url": "https://www.youtube.com/watch?v=G3cgnOr2RUs&index=3&list=PL1aOeRcv84HPWB9q0Ux0INeWatw-AjeaG",
                "artist-name": "Rodrigo y Gabriela",
                "profile-url": null,
                "contribute": 1,
                "impression": 23,
                "skip": 7,
                "info-seen": 18,
                "unlock": 16,
                "like": 23,
                "favorite": 8,
                "artist-content": null,
                "comments": [
                    {
                        "id": 478,
                        "content": "I usually close myself out from the outside world and listen to this"
                    },
                    {
                        "id": 4399,
                        "content": "I love its chill vibes"
                    },
                    {
                        "id": 8320,
                        "content": "This song brightens up my day when I'm sad, and glorifies it even more when I'm already buzzing ;)"
                    }
                ]
            }
        },
        {
            "id": "2236",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/2236"
            },
            "attributes": {
                "location": "Home",
                "activity": "Browse & Chill",
                "mood": "Happy",
                "song-title": "Big Surprise",
                "background-story": null,
                "playback-url": "https://soundcloud.com/electricswingcircus/03-big-surprise-1?in=zentone/sets/electro-swing-collection",
                "artist-name": "Electric Swing Circus",
                "profile-url": null,
                "contribute": 1,
                "impression": 23,
                "skip": 22,
                "info-seen": 1,
                "unlock": 13,
                "like": 11,
                "favorite": 22,
                "artist-content": null,
                "comments": [
                    {
                        "id": 2236,
                        "content": "Love it!!!"
                    },
                    {
                        "id": 6157,
                        "content": "It's great to listen to this when I have nothing to do."
                    },
                    {
                        "id": 10078,
                        "content": "This song brightens up my day when I'm sad, and glorifies it even more when I'm already buzzing ;)"
                    }
                ]
            }
        },
        {
            "id": "2212",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/2212"
            },
            "attributes": {
                "location": "Home",
                "activity": "Browse & Chill",
                "mood": "Happy",
                "song-title": "Old Records",
                "background-story": null,
                "playback-url": "https://soundcloud.com/doctaepic/jamie-berry-old-records?in=zentone/sets/electro-swing-collection",
                "artist-name": "Jamie Berry",
                "profile-url": null,
                "contribute": 1,
                "impression": 33,
                "skip": 9,
                "info-seen": 30,
                "unlock": 20,
                "like": 3,
                "favorite": 5,
                "artist-content": null,
                "comments": [
                    {
                        "id": 2212,
                        "content": "Love it when I can blast this out loud at home"
                    },
                    {
                        "id": 6133,
                        "content": "When I'm just chillax this is great for accompany"
                    },
                    {
                        "id": 10054,
                        "content": "This song just makes me even happier I feel like flying!!"
                    }
                ]
            }
        },
        {
            "id": "2199",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/2199"
            },
            "attributes": {
                "location": "Home",
                "activity": "Browse & Chill",
                "mood": "Happy",
                "song-title": "Twitch (ft. Rosie Harte)",
                "background-story": null,
                "playback-url": "https://soundcloud.com/jamie-berry/jamie-berry-twitch-ft-rosie?in=zentone/sets/electro-swing-collection",
                "artist-name": "Jamie Berry",
                "profile-url": null,
                "contribute": 1,
                "impression": 34,
                "skip": 14,
                "info-seen": 33,
                "unlock": 2,
                "like": 31,
                "favorite": 28,
                "artist-content": null,
                "comments": [
                    {
                        "id": 2199,
                        "content": "Love it when I can blast this out loud at home"
                    },
                    {
                        "id": 6120,
                        "content": "When I'm just chillax this is great for accompany"
                    },
                    {
                        "id": 10041,
                        "content": "This song brightens up my day when I'm sad, and glorifies it even more when I'm already buzzing ;)"
                    }
                ]
            }
        },
        {
            "id": "2192",
            "type": "recommendations",
            "links": {
                "self": "http://localhost:3000/api/recommendations/2192"
            },
            "attributes": {
                "location": "Home",
                "activity": "Browse & Chill",
                "mood": "Happy",
                "song-title": "New York, New York",
                "background-story": null,
                "playback-url": "https://www.youtube.com/watch?v=EUrUfJW1JGk",
                "artist-name": "Frank Sinatra",
                "profile-url": null,
                "contribute": 1,
                "impression": 38,
                "skip": 26,
                "info-seen": 5,
                "unlock": 5,
                "like": 12,
                "favorite": 10,
                "artist-content": null,
                "comments": [
                    {
                        "id": 2192,
                        "content": "Feel very at ease at home with this"
                    },
                    {
                        "id": 6113,
                        "content": "I love its chill vibes"
                    },
                    {
                        "id": 10034,
                        "content": "When I listen to this song, I smile to myself hahahaha it really makes my day"
                    },
                    {
                        "id": 12359,
                        "content": "I believe there̍s only one song that can fit perfectly to your lucky feel and that is��"
                    }
                ]
            }
        }
    ]
}
