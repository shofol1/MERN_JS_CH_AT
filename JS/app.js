//regular ecpression

//test,source,match,search,exec,replace

// const regExp = /shafol/i;
// const regExp = /shafol/gi;

// console.log(regExp.test("Hi i am Ashikul Shafol"));

// console.log(regExp.source);
// console.log(regExp.exec("hi i am shafol"));
// const str = "hi i am shafol shafol shafol";
// console.log(str.match(regExp));
// console.log(str.search(regExp));
// console.log(str.replace(regExp, "Ashikul"));

// array data structure

//1. set

// const set = new Set();
// set.add(100);
// set.add(200);
// set.add(300);
// set.add(300); //duplicate value discurded
// console.log(set);
// set.delete(300);
// console.log(set);
// set.clear();
// console.log(set);

//1. map

// const map = new Map();
// map.set("1", "Mango");
// map.set("2", "Banana");
// map.set("3", "orange");
// map.set("4", "lichu");

// console.log(map);

// map.forEach((el, i) => console.log(i, el));

// console.log(map.has("2"));

// map.delete("1");
// console.log(map);

// map.clear();
// console.log(map);

//3. weak map and weak set

// const ws = new WeakSet();
// const object1 = {};
// const object2 = {};

// ws.add(object1);
// ws.add(object2);
// console.log(ws);

// console.log(ws.has(object1));
// ws.delete(object1);
// console.log(ws.has(object1));

// const wm = new WeakMap();

// wm.set(object1, 12121);
// console.log(wm.has(object1));
// console.log(wm.get(object1));
// wm.delete(object1);
// console.log(wm.has(object1));

//padStart padEnd,trim,trimStart,trimEnd

// const min = "8";
// const second = "6";
// console.log(min.padStart(4, "0"));
// console.log(second.padEnd(4, "0"));

// let str = "    shofol    ";

// console.log(str.length);
// // str = str.trim();
// // str = str.trimStart();
// str = str.trimEnd();
// console.log(str.length);

//factory function

// function user(name, age) {
//   const userObj = {
//     name: name,
//     age: age,
//     walk: function () {
//       console.log(`${this.name} start walking`);
//     },
//   };
//   return userObj;
// }
// const user1 = user("Ashikul", 23);

// const user2 = user("shafol", 24);
// console.log(user1, user2);

//constructor function

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.walk = function () {
//     console.log(`${this.name} is walking`);
//   };
// }

// const user1 = new User("Ashikul", 23);
// const user2 = new User("shafol", 23);

// console.log(user1, user2);

// const homeAddress1 = homeAddress("A", "B", "C");
// const homeAddress2 = homeAddress("x", "y", "z");

// const homeAddress3 = new HomeAddress("D", "E", "F");

// factory function
// function homeAddress(street, city, address) {
//   return {
//     street,
//     city,
//     address,
//   };
// }
// constructor function
// function HomeAddress(street, city, address) {
//   this.street = street;
//   this.city = city;
//   this.address = address;
// }

// console.log(homeAddress1);
// console.log(homeAddress2);
// console.log(homeAddress3);

//asyncronus

// console.log("before");
// function fetchData() {
//   setTimeout(function () {
//     console.log("hi i am shafol");
//   }, 2000);
// }
// const fetchD = fetchData();
// console.log(fetchD);
// console.log("after");

//practise regular expresion

const regEx = /shafol/gi;
const str = "hi i am Shafol shafol";

//test
// console.log(regEx.test(str));

//source
// console.log(regEx.source);

//exec
// console.log(regEx.exec(str));

//search
// console.log(str.search(regEx));

//replace
// console.log(str.replace(regEx, "Sumon")); //if there is a repeated word that time only replace the first word but when we use gi that time both word will replaced

//set practise

// const set = new Set();

// set.add(100);
// set.add(200);
// set.add(300);
// console.log(set);

// console.log(set.size);

// set.delete(100);
// console.log(set);

// for (let el of set) {
//   console.log(el);
// }

// set.forEach((element, index, array) => {
//   console.log(element, index, array);
// });

// const name = ["shafol", "sumon", "shanto"];

// name.map((na) => set.add(na));
// console.log(set);

//map practise

// const map = new Map();
// console.log(map);
// map.set(0, "shafol"); //two inpue-->key,value
// map.set(1, "Sumon"); //two inpue-->key,value
// map.set(2, "Shanto"); //two inpue-->key,value
// console.log(map);
// map.forEach((element, key, array) => {
//   console.log(element, key, array);
// });
// console.log(map.size);
// map.delete(1);
// console.log(map);

// map.clear();
// console.log(map);

// practise of weakset and weakmap
// we only use object

// const ws = new WeakSet();
const object1 = { name: "shafol", roll: "1" };
const object2 = { name: "Sumon", roll: "2" };
// ws.add(object1);
// ws.add(object2);
// ws.delete(object1);
// console.log(ws);
// console.log(ws.has(object1));
// const wm = new WeakMap();
// console.log(wm);
// wm.set(object1, 1111); //take an object and value as a input
// console.log(wm);
// console.log(wm.has(object1));//return booloean
// console.log(wm.get(object1));//will return the value
