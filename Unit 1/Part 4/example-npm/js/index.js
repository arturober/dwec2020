import {Person} from './Person.class';
import * as constants from './constants';
import '../style.css';
import moment from 'moment';

let p = new Person(constants.DEFAULT_NAME, constants.DEFAULT_AGE);
console.log(p.toString());
let p2 = new Person('Alissa', 34);
console.log(p2.toString());
p2.sayHello();
console.log(moment().format());
