"use strict";
let age;
age = 50;
let name;
name = 'Max';
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback = (a) => { return 100 + a; };
let anything;
anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
let person;
person = ['Max', 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
const data = {
    status: Status.READY,
};
if (data.status === Status.LOADING) {
    console.log('Loading...');
}
if (data.status === Status.READY) {
    console.log('Data is ready');
}
let union;
union = 7;
union = 'text';
let formBtn;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
