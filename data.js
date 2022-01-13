let iconsArr = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let container = document.querySelector(".row");
let type = document.getElementById("type");
const animalArr = iconsArr.filter((element) => element.type == "animal");
const vegetableArr = iconsArr.filter((element) => element.type == "vegetable");
const userArr = iconsArr.filter((element) => element.type == "user");
//
// for(let i = 0; i < iconsArr.length; i++){
//     document.querySelector(".row").innerHTML += `
//     	<div style="color:${iconsArr[i].color}" class="col-2 mx-3 my-3 card text-center">
// 			<i class="${iconsArr[i].family} ${iconsArr[i].prefix}${iconsArr[i].name}"></i>
// 			<h3 class="cardname">${iconsArr[i].name}</h3>
//     	</div>
// 	`;
//   }


function createCard(array) {
array.forEach((icon, i) => {
	container.innerHTML += ` 
	<div style="color:${iconsArr[i].color} " class="${iconsArr[i].family} col-2 mx-3 my-3 card text-center ">
		<i class="${array[i].type} ${iconsArr[i].family} ${iconsArr[i].prefix}${iconsArr[i].name}"></i>
		<h3 class="cardname">${iconsArr[i].name}</h3>
	</div>
	`;
});
}

createCard(iconsArr);

type.addEventListener("change",function(){
	switch (this.value){
		case "all":
			container.innerHTML = "";
			createCard(iconsArr);
			break;
		case "animal":
			container.innerHTML = "";
			createCard(animalArr);
			break;
		case "vegetable":
			container.innerHTML = "";
			createCard(vegetableArr);
			break;
		case "user":
			container.innerHTML = "";
			createCard(userArr);
			break;
	}
});