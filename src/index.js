import _ from 'lodash';
import './style.scss';
import Icon from './avatars.jpg';
function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}
document.body.appendChild(component());//1:16:36
