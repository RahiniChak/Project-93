function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    window.location="kwitter_room.html";
}