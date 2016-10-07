'use strict';

//want to select all of the people under the age of 50

const people = [
	{
		name: 'Faisal',
		age: 23
	}, {
		name: 'Jane',
		age: 45
	}, {
		name: 'ABC',
		age: 99
	}
]

const peopleFilterFunc = function(person){
	return (person.age < 50);
}

const peopleFilterFunc = function(person){
	return person.name.length <= 4;
}

const under_50 = people.filter(peopleFilterFunc);
console.log(under_50);

//people.filter(function(person) { //callback ex.

