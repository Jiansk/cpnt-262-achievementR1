var _ = require('lodash');
var pets = [
    {name: 'Bamboo', age: 4, color: 'white'},
    {name: 'Spike', age: 4, color: 'brown'},
    {name: 'Spot', age: 4, color: 'black'},
];

var matches = _.where(pets,{age:4, color: 'brown'});

console.log('here are our matches', matches );