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
