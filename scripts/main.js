let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/firefox2.png');
	}
	else {
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
}

let button = document.querySelector('button');
let heading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	}
	else {
		localStorage.setItem('name', myName);
		heading.textContent = 'You are cool, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
}
else {
	let storedName = localStorage.getItem('name');
	heading.textContent = 'You are cool, ' + storedName;
}

button.onclick = function() {
	setUsername();
}

let storageButton = document.getElementById('storage');
storageButton.onclick = function() {
	localStorage.clear();
}