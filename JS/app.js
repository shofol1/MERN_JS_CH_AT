//test,source,match,search,exec,replace

// const regExp = /shafol/i;
const regExp = /shafol/gi;

// console.log(regExp.test("Hi i am Ashikul Shafol"));

// console.log(regExp.source);
// console.log(regExp.exec("hi i am shafol"));
const str = "hi i am shafol shafol shafol";
// console.log(str.match(regExp));
// console.log(str.search(regExp));
console.log(str.replace(regExp, "Ashikul"));
