import listBuilder from './listBuilder.js';

const displayData = (data) => {
  const ul = document.querySelector('.score-list');
  ul.innerHTML = '';
  data.forEach((element) => {
    ul.innerHTML += listBuilder(element);
  });
};

export default displayData;