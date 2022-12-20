import 'lodash';
import './style.css';
import listBuilder from './modules/listBuilder.js';

const data = [
  {
    name: 'Name',
    score: '100',
  },
  {
    name: 'Name',
    score: '100',
  },
  {
    name: 'Name',
    score: '100',
  },
  {
    name: 'Name',
    score: '100',
  },
];

const displayData = (data) => {
  const ul = document.querySelector('.score-list');
  data.forEach((element) => {
    ul.innerHTML += listBuilder(element);
  });
};

window.onload = displayData(data);