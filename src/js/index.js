import $ from 'jquery';
import merge from './merge';

import '../css/style.scss';

$('.title').text('Hello world');
console.log('hello');

const obj1 = {
    name: "Tom"
};
const obj2 = {
    age: 20
};
console.log(merge(obj1, obj2));

