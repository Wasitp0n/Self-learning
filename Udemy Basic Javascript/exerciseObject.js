console.log("Hello");
// ex 1

let address = {
  street: "a",
  city: "b",
  zipcode: "c",
};
// show data
function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}
showAddress(address);

// Factory Function - ตั้งค่าออบเจคให้เรียกค่าได้

function createCircle(radius) {
  return {
    radius: radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

// Constructor function - .ใช้ pascal notation- this-new
function Ciircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Ciircle(1);
console.log(circle);

// Ex3 (compare Obj)

let address1 = new AddressEx3("a", "b", "c");
let address2 = new AddressEx3("a", "b", "c");

function AddressEx3(street, city, zipcodeEx3) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcodeEx3;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipcodeEx3
  );
}
function areSame(address1, address2) {
  return address1 === address2;
}
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// ex4 Blogpost==============================================
// let post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 10,
//   comments: [
//     { author: "a", body: "b" },
//     { author: "c", body: "d" },
//   ],
//   isLive: true,
// };
//console.log(post);
//ex5 PostObject ============================================

let post = new Post("a", "b", "c");
console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
// ex6 =====================================================
let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$", tooltip: "Modulate", minPerPerson: 11, maxPerPerson: 50 },
  {
    label: "$",
    tooltip: "expensive",
    minPerPerson: 51,
    maxPerPerson: 50000000,
  },
];
let restaurants = [{ averagePerPerson: 5 }];
