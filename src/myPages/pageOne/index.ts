import _ from 'lodash';

const component = (suffix: string): HTMLDivElement => {
  const element: HTMLDivElement = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'wbpack', 'this', 'is', 'a', suffix], ' ');
  return element;
};

document.body.appendChild(component('test'));