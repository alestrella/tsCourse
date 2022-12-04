// ex. 1
let age: number;
age = 50;
let username: string;
username = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback = (a:number):number => { return 100 + a };

// ex.2
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// ex.3
let some:unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
    str = some;
}

// ex.4
let person: [string, number];
person = ['Max', 21];

// ex.5
enum Status { LOADING, READY }
const data = {
  status: Status.READY,
};

if (data.status=== Status.LOADING) {
  console.log('Loading...')
}
if (data.status=== Status.READY) {
  console.log('Data is ready')
}

// ex.6
let union: string | number;
union = 7;
union = 'text';

// ex.7
let formBtn: 'enable' | 'disable';

// ex.8
function showMessage(message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

// ex.9
type DataPage= {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}

const page1: DataPage = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  // details: {
  //   createAt: '2021-01-01',
  //   updateAt: '2021-05-01',
  // }
}

const page2:DataPage = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}