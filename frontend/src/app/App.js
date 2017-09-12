import React from 'react';
import RecommendationList from '../recommendation/RecommendationList';
import 'semantic-ui-css/semantic.min.css';

let queryResult = {
  "data": [
    {
      "id": "1717",
      "type": "recommendations",
      "links": {
        "self": "http://localhost:3000/api/recommendations/1717"
      },
      "attributes": {
        "location": "Cafe",
        "activity": "Creative & Fun",
        "mood": "Stressed",
        "moment-coefficient": 2,
        "song-title": "Resonance",
        "artist-name": "HOME",
        "playback-url": "https://www.youtube.com/watch?v=8GW6sLrK40k",
        "profile-url": "https://google.com",
        "background-story": "blah",
        "artist-comment": "you'll love it",
        "recommender-and-like": 41,
        "number-of-recommender": 1,
        "impression": 79,
        "skip": 16,
        "info-seen": 48,
        "unlock": 24,
        "like": 40,
        "favorite": 12,
        "comments": [
          {
            "user": "Roberto Duryea ",
            "id": "7",
            "content": "Incredible!"
          },
          {
            "user": "Tim Holloway ",
            "id": "8",
            "content": "Wonderful!"
          },
          {
            "user": "Roberto Minaj ",
            "id": "9",
            "content": "Love it."
          }
        ]
      }
    },
    {
      "id": "766",
      "type": "recommendations",
      "links": {
        "self": "http://localhost:3000/api/recommendations/766"
      },
      "attributes": {
        "location": "Cafe",
        "activity": "Creative & Fun",
        "mood": "Stressed",
        "moment-coefficient": 2,
        "song-title": "Falling In Love At A Coffee Shop",
        "artist-name": "Landon Pigg",
        "playback-url": "https://www.youtube.com/watch?v=erywPdFfORE",
        "profile-url": "https://yahoo.com",
        "background-story": "great",
        "artist-comment": "lol",
        "recommender-and-like": 197,
        "number-of-recommender": 1,
        "impression": 391,
        "skip": 79,
        "info-seen": 235,
        "unlock": 118,
        "like": 196,
        "favorite": 59,
        "comments": [
          {
            "user": "Satya ",
            "id": "1",
            "content": "Incredible!"
          },
          {
            "user": "Wei Liang ",
            "id": "2",
            "content": "Wonderful!"
          },
          {
            "user": "Sally ",
            "id": "3",
            "content": "Love it."
          }
        ]
      }
    },
    {
      "id": "1718",
      "type": "recommendations",
      "links": {
        "self": "http://localhost:3000/api/recommendations/1718"
      },
      "attributes": {
        "location": "Cafe",
        "activity": "Creative & Fun",
        "mood": "Stressed",
        "moment-coefficient": 2,
        "song-title": "Stressed Out",
        "artist-name": "twenty one pilots",
        "playback-url": "https://www.youtube.com/watch?v=pXRviuL6vMY",
        "profile-url": "https://soccernet.com",
        "background-story": "meh",
        "artist-comment": "wow",
        "recommender-and-like": 292,
        "number-of-recommender": 1,
        "impression": 582,
        "skip": 117,
        "info-seen": 350,
        "unlock": 175,
        "like": 291,
        "favorite": 88,
        "comments": [
          {
            "user": "Mancini ",
            "id": "4",
            "content": "Incredible!"
          },
          {
            "user": "Colin ",
            "id": "5",
            "content": "Wonderful!"
          },
          {
            "user": "Sally ",
            "id": "6",
            "content": "Love it."
          }
        ]
      }
    }
  ]
}

class App extends React.Component{
  render() {
    return (
      <RecommendationList songs={queryResult["data"]} />
    );
  }
}

export default App;
