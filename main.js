//!условные операторы
//! тепнальный оператор
//!условие ? ():()
// let currentUser = false;
// currentUser
// ? alert("добро пожаловать")
// : alert("зарегистю или войдите в свой акк");
// 2 //
// let password = ("введите пароль");
// let passwordConfirm = prompt("подвердите пароль");
// password===passwordConfirm
//let age = prompt("сколько вам лет");
//age >= 18 ? console.log("добро пожаловать") : console.log("доступ запрещен");
//4
// let role = "admin";
// role === "admin"
//   ? alert("вы можите редакт. группу")
//   : alert("у вас нет прав для ред.");
//5
// let productCount = 10;
// productCount > 0 ? alert(`в корзине ${productCount}товаров`) : alert;
// ("корзина пуста");

//!if ...else /if ...else/if ...else
// let name = prompt("введите имя");
// if (name === "john") {
//   alert(`привет ${name}`);
// }
//2
// let age = 20;
// let canDrive = null;
// if (age > 17) {
//   canDrive = true;
// } else {
//   canDrive = false;
// }
// console.log(canDrive);

//3
// let startTime = 9;
// let arrive = 7;
// if (arrive >= startTime) {
//   console.log("можем зайти");
// } else {
//   console.log("не пускают в офис");
// }
//4
// let num1 = prompt("первое число")
// let operator = print("мат.оператор");
// let num2 = prompt("ворое чило");
// if(operator==="+")
// {alert(nam1+num2)}
// else if (operator==="-")
// {alert(num1-num2)};
// else if (operator==="/"){alert(num1/num2)};
//! switch case
// let season = +prompt("выбрете сезон");
// switch (season) {
// season===1
// "1" === 1
// 1 === 1
//   case 1:
//     console.log("зима");
//     break;
//   case 2:
//     console.log("весна");
//     break;
//   case 3:
//     console.log("лето");
//     break;
//   case 4:
//     console.log("осень");
// }

// console.log("выбрете число 1го до 4 ");
//CREATE , UPDATE , READ , DELETE --> CRUD - operations
//
// let day = prompt("выберите день недели");
// switch (day) {
//   case "1":
//     console.log("пн");
//     break;
//   case "2":
//     console.log("вт");
//     break;
//   case "3":
//     console.log("ср");
//     break;
//   case "4":
//     console.log("чт");
//     break;
//   default:
//     console.log("это не день недели");
// }
// !логическое И -&&
// let bread = "baton";
// let product1 = "молоко";
// if (bread === "baton" && product1 === "молоко") {
//   alert("взяли нужное!");
// } else {
//   alert("не то ,что нужное");
// }
//!логическое ИЛИ - ||
// let product = "конфеты";
// if (product === "лепешка" || product === "батон") {
//   alert("правильно");
// } else alert("неправильно");
// !10
//!22
// let arrive = prompt("во сколько вы пришли ?");
// if (arrive >= 10 && arrive <= 22) {
//   alert("офис открыт");
// } else {
//   alert("офис закрыт");
// }
//данные из БД
//: user123
//: password:ps123
// const email = prompt("введите элюпочту");
// const password = prompt("введите пароль");
// if (email === "user123" && password === "ps123") {
//   alert("вы успешно зашли");
// } else {
//   alert("emil или пароль не првильный");
// }
// const email = prompt("введите элюпочту");
// const password = prompt("введите пароль");

// console.log(email, password);
// console.log(Boolean(email, password));
// if (email == null || password == null || email === "" || password === "") {
//   alert("заполните поля");
// } else {
//   alert("есть данные");
// }
//   if (email === "user123" && password === "ps123") {
//     alert("вы успешно зашли");
//   } else {
//     alert("emil или пароль не првильный");
//   }
// }
// let password = prompt("введите пароль");
// const tries = 1;
// if (password === "ps123") {
//   alert("пароль введен правильно");
// } else {
//   password = prompt("попробуйте заново ввести пароль");
//   console.log(password);
// }
// if (password === "ps123") {
//   alert("пароль введен правильно");
// } else {
//   alert("ваш аккаунт заблокирован");
// }

// const email = prompt("введите эл.почту");
// if (email === "user123") {
//   let password = prompt("введите пароль");
//   if (password === "ps123");
//   {
//     alert("Loggin in");
//   }
// }
//!
// let answer = confirm("вы хотите покинуть игру");
// console.log(answer);
// if (answer) {
//   alert("вы покинули игру");
// } else {
//   alert("ура вы остались ");
// }
//! инкремент увиливить на 1 ++
// !декремент - уменьшить на 1 ---
// let likes = 5;
// let answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`вы поставили лайк, всего лайков:${likes}`);
// }
// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`вы поставили лайк, всего лайков:${likes}`);
// }
// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`вы поставили лайк, всего лайков:${likes}`);
// }
// let tasksClassroom = confirm("вы выполнили задания из классрум?");
// let tasksOnPlatform = confirm("вы выпонили задания из платформы?");
// if (tasksClassroom && tasksOnPlatform) {
//   alert("у вас будет высокий KPI");
// } else {
//   alert("у вас будут низкий KPI");
// }
//momentum , teamflow
let homework = "teamflow";
if (homework === "momentum" || homework === "teamlow") {
  alert("100bal");
} else {
  alert("0bal");
}
