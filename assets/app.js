// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0bFCK4F0yPrSCT4HOAaBjbW4zze4Nbos",
  authDomain: "train-schedule-smushed.firebaseapp.com",
  databaseURL: "https://train-schedule-smushed.firebaseio.com",
  projectId: "train-schedule-smushed",
  storageBucket: "train-schedule-smushed.appspot.com",
  messagingSenderId: "70873716006"
};
firebase.initializeApp(config);

var database = firebase.database();

var trainSchedule = {
  milwaukee: {
    name: "Hiawatha Line",
    destination: "Milwaukee, WI",
    frequency: 90,
    startTime: 240,
    endTime: 1380,
    departTimes: [],
    nextArrival: 0,
    minutesAway: 0,
  },
  portland: {
    name: "Oregon Trail",
    destination: "Portland, OR",
    frequency: 90,
    nextArrival: 0,
    minutesAway: 0,
  },
  philadelphia: {
    name: "Rocky Train",
    destination: "Philadelphia, PA",
    frequency: 90,
    nextArrival: 0,
    minutesAway: 0,
  }
}