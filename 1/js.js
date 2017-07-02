//задача 1
// function Box(w,h,depth,material){
// 	this.w = w;
// 	this.h = h;
// 	this.depth = depth;
// 	this.material = material;
// 	this.volume = function () {
// 		return w * h * depth;
// 	};
// 	this.equals = function (that) {
// 		if(this.w === that.w && this.h === that.h){
// 			return true;
// 		}
// 		return false;
// 	};
// }

// var cat = new Box(10,20,50, "gold");
// var cat1 = new Box(10,30,20, "gold");

// console.log(cat);
// console.log("depth = " + cat.volume());
// console.log(cat.equals(cat1));

//задача 2

// function Man(name){
// 	this.name = name;

// 	this.hi = function() {
// 		alert("Hi, my name is " + this.name);
// 	}
// }

// var vlad = new Man("Vlad");
// console.log(vlad);
// vlad.hi();

//задача 3

// function Human(age){
// 	this.age = age;
// }
// var vlad = new Human(21);
// var vova = new Human(42);
// var born = new Human(15);

// var arr = [vlad,vova,born];

// function AggPeople(arr){
// 	var max = 0;
// 	for(var i = 0; i < arr.length; i++){
// 		var j = arr[i];
// 		if(max <j.age){
// 			max = j.age;
// 		}
// 	}
// 	return max;
// }

// console.log(AggPeople(arr));

//задача 4

// function People(name,age,h,weight){
// 	this.name = name;
// 	this.age = age;
// 	this.h = h;
// 	this.weight = weight;

// 	this.hi = function() {
// 		alert("Hi, i,m is " + this.name);
// 	};
// 	this.har = function() {
// 		alert("My age = "+ this.age + ", h = "+ this.h + ", weight = " + this.weight);
// 	};
// }

// People.prototype.toString = function() {
// 	return "Hi, I,m is " + this.name + ", my age = "+ this.age + ", h = "+ this.h + ", weight = " + this.weight
// };

// var Vlad = new People("Vlad", 21, 180, 75);

// Vlad.hi();
// Vlad.har();
// console.log(Vlad.toString());

