console.log("Hello World");

window.onload = function(){

var newFriends = ["Gjetson", "Bam-Bam", "Mr.Slate", "Gazoo"];

for (var i = 0; i<newFriends.length; i++){
	console.log(newFriends[i]);

	var addNewFriend = document.createElement("li");
	addNewFriend.className = "newFriends";
	addNewFriend.innerHTML = newFriends[i];
	list.appendChild(addNewFriend);
}
};