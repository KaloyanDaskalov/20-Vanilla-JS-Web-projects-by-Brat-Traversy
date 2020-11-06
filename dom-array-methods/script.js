const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// console.log(main, addUserBtn, doubleBtn, showMillionairesBtn, sortBtn, calculateWealthBtn);

//array with users
let data = [];

// populate UI with users
getRandomUser();
getRandomUser();
getRandomUser();

// create user class
class User {
	first = 'random';
	constructor(title, first, last) {
		this.name = `${title} ${first} ${last}`;
		this.money = Math.floor(Math.random() * 1000000)
	}
}

//add user to array with users
function addNewUser(user) {
	data.push(user);

	updateDOM();
}

// DOM update function 
function updateDOM(usrArray = data) {
	//clear div 
	main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
	//populate UI with users	
	usrArray.forEach(usr => {
		const div = document.createElement('div');
		div.classList.add('person');
		div.innerHTML = `<strong>${usr.name}</strong>$${formatMoney(usr.money)}`;
		main.appendChild(div);
	});
}

// format number as money
function formatMoney(number) {
	return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//double money function
function doubleMoney() {
	data = data.map(usr => {
		// return {... usr, money: usr.money *2};
		return {
			name: usr.name,
			money: usr.money * 2
		};
	});
	updateDOM();
}

//show millionaires function
function showMillionaires() {
	data = data.filter(user => user.money >= 1000000);

	updateDOM();
}

//sort by richest
function sortByRichest() {
	data.sort((a, b) => b.money - a.money);

	updateDOM();
}

//calculate wealth
function calculateWealth() {
	const wealth = data.reduce((acc, curr) => acc + curr.money, 0);

	const wealthEl = document.createElement('div');
	wealthEl.innerHTML = `<h3>Total wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
	main.appendChild(wealthEl);

}


// fetch random user and add money
async function getRandomUser() {

	try {
		const usrData = await (await (await fetch('https://randomuser.me/api')).json());

		const { title, first, last } = usrData.results[0].name;

		const usr = new User(title, first, last);
		addNewUser(usr);
		// console.log(usr);
	} catch (err) {
		console.error(err);
	}
}

//event listeners

//add random user
addUserBtn.addEventListener('click', getRandomUser);

//double user money
doubleBtn.addEventListener('click', doubleMoney);

//show millionaires
showMillionairesBtn.addEventListener('click', showMillionaires);

//sort by richest
sortBtn.addEventListener('click', sortByRichest);

//calculate wealth
calculateWealthBtn.addEventListener('click', calculateWealth);
