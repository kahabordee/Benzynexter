var firebaseConfig = {
    apiKey: "AIzaSyC4Ws9T6tQ-CmDFvX1EvAsx5GmpJxpow4w",
    authDomain: "container-dryer.firebaseapp.com",
    databaseURL: "https://container-dryer-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "container-dryer",
    storageBucket: "container-dryer.appspot.com",
    messagingSenderId: "280896164107",
    appId: "1:280896164107:web:ba18898891827be04b120e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status = 0;
	


	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == 1){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == 1){    // post to firebase
			firebaseRef.set(0);
			Led1Status = 0;
		} else {
			firebaseRef.set(1);
			Led1Status = 1;
		}
	})
});