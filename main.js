const dashBoardItems = document.querySelectorAll(".dashboard-items");

function changeIconColor(e) {
	console.log(this);
	let iconName = this.childNodes;
	iconName[1].style.fill = "#3b82f6";
}
function resetIconColor() {
	console.log(this);
	let iconName = this.childNodes;
	iconName[1].style.fill = "white";
}

dashBoardItems.forEach((dashBoardItem) => {
	dashBoardItem.addEventListener("mouseenter", changeIconColor);
	dashBoardItem.addEventListener("mouseleave", resetIconColor);
});
