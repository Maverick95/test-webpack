import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'wbpack', 'this', 'is', 'a', 'test'], ' ');
  return element;
}

document.body.appendChild(component());