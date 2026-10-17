function showTime() {
document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
altura de começar;
setInterval(function () {
	showTime();
}, 1000);

