let person = {
  name: "Maria",
  age: 18,
  city: "Moscow",
};
console.log(person.name);
console.log(person.age);
console.log(person.city);

let original = {
  item: "milk",
  price: 19,
};
let copy = { ...original };
copy.price = 50;
console.log(original.price);
console.log(copy.price);

let person2 = {
  name: "Maria",
  age: 20,
  city: "Kazan",
};
let clone = Object.assign({}, person2);
clone.age = 21;
console.log(person2.age);
console.log(clone.age);

let user = null;
console.log(user?.city);

let location = {
  city: "Moscow",
  address: {
    street: "Lenina",
    zip: 394000,
  },
};
console.log(location?.address?.zip);
console.log(location?.address?.number);

let data = [
  {
    items: {
      banana: 5,
      ananas: 6,
    },
  },
];
console.log(data[0]?.items?.banana);
console.log(data[0]?.items?.apple);

console.log(Object.keys(person));

let car = {
  color: "red",
  brand: "Jeep",
  type: "saloon",
};
console.log(Object.values(car));

console.log(Object.entries(person));

let user1 = {
  name: "Sasha",
  tytle: "admin",
};
console.log(JSON.stringify(user1));

let json = '{"name": "Sasha", "tytle":"admin"}';
console.log(JSON.parse(json));

let json1 =
  '{"name": {"firstName":"Sasha", "secondName":"Ivanov"}, "tytle":"admin"}';
console.log(JSON.parse(json1));

let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

let array = [5, 4, 3, 2, 1];
let newArray = array.map((el) => el * el);
console.log(newArray);

let array2 = [1, 3, 9, 5, 4, 8];
let filtredArray = array2.filter((el) => el % 2 === 0);
console.log(filtredArray);

let person3 = {
  name: "Zlata",
  age: 4,
};
let { name, age } = person3;
console.log(name);
console.log(age);

let fruitsArray = ["яблоко", "банан", "груша"];
let [first, second, ...restArray] = fruitsArray;
console.log(first);
console.log(second);

let person4 = {
  sex: "male",
};
let { sex, name4, age4 } =  person4; /*Не поняла правильно ли я присвоила значение по умолчанию*/
console.log(sex);
console.log(name4);
console.log(age4);
