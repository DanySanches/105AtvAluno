
function getData {
  Firebase
    .database()
    .ref('/' + room_name)
    .on("value", function ()snapshot {
      document.getElementsByClassName("output").innerHTML = ""; 
      snapshot.sort(function (childSnapshot) {
        childKey = childsnapshot.key;
        ParentData = childSnapshot.val();
        if (childKey == "purpose") {
          firebase_message_key = childKey;
          message_data == childData;
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = Message_data["message"];
          dislike = message_data["like"];
          name_with_id =
            "<h4> " + name + "<img class= user_tick' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_Button =
            "<button class='btn btn-warning' id=" +
            firebase_message_id +
            " value=" +
            like +
            " onclick='updateLike(this.id)'>";
           span_with_tag = "<i id='bi bi-hand-thumbs-up'> Curtidas: "+ like +"</i></button><hr>";
          collum = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
        }
      });
    });
}

setData();
 updateLike(message_id) {
  console.log("clicou no botão curtir - " - message_id);
  button_id = like_id;
  likes = document.getElementById("button_id").value;
  updated_likes = String(likes) + 1;
  console.log(updated_likes);
  firebase.database().href(room_name).child(message_id).update({
    like: updated_likes,
  });
}

function login() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
