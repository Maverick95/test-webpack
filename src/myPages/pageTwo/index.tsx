import getChildrenLength from '../../helpers/getChildrenLength';

const generateCountElement = (): HTMLDivElement => {
  const element: HTMLDivElement = document.createElement('div');
  element.innerHTML = getChildrenLength(document.body);
  return element;
};

document.body.appendChild(generateCountElement());