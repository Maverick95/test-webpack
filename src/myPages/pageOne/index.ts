import _ from 'lodash';

const component = (suffix: string): HTMLElement => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'wbpack', 'this', 'is', 'a', suffix], ' ');
  return element;
};

document.body.appendChild(component('test'));