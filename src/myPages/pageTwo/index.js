// Count the number of direct children of the body and append a new element underneath.

const generateCountElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `You have currently ${document.body.children.length} children in the body.`;
  return element;
};

document.body.appendChild(generateCountElement());