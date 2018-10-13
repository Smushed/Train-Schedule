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

database.ref().on("child_added", function (snapshot) {
  console.log(snapshot.val());
  $(".train-table tbody").append(
      `<tr>
          <td>${snapshot.val().trainName}</td>
          <td>${snapshot.val().destination}</td>
          <td>${snapshot.val().firstTrain}</td>
          <td>Months Worked</td>
          <td>${snapshot.val().frequency}</td>
          <td>Total Months Billed</td>
      </tr>`
  );
});

$(".submit").on("click", function (event) {

  var trainName = $(".train-name").val();
  var destination = $(".destination").val();
  var firstTrain = $(".first-train").val();
  var frequency = $(".frequency").val();

  database.ref().push({
    trainName,
    destination,
    firstTrain,
    frequency
  });
  emptyInput();
});

function emptyInput() {
  $(".train-name").val("");
  $(".destination").val("");
  $(".first-train").val("");
  $(".frequency").val("");
};