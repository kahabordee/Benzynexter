var showstatus = document.getElementById("showstatus");
var db_refState = firebase.database().ref().child("w_status");
    db_refState.on("value", sanp => {
      showstatus.innerText = sanp.val();
   });
