const listBuilder = (data) => {
  const { name, score } = data;
  return `
  <li class="score-list--item">${name}: ${score}</li>
  `;
};

export default listBuilder;