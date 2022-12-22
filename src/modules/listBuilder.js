const listBuilder = (data) => {
  const { user, score } = data;
  return `
  <li class="score-list--item">${user}: ${score}</li>
  `;
};

export default listBuilder;