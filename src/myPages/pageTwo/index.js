import getChildrenLength from '../../helpers/getChildrenLength';

const generateCountElement = () => {
  const element = document.createElement('div');
  element.innerHTML = getChildrenLength(document.body);
  return element;
};

document.body.appendChild(generateCountElement());