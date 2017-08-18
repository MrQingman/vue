import _ from 'lodash';
import './style.css';
import icon from './icon.jpg';
function component(){
    var element=document.createElement("div");
    element.innerHTML=_.join(['Hello','webpack'],' ');
    element.classList.add('hello');
    let myImg=new Image();
    myImg.src=icon; 
    element.appendChild(myImg);
    return element;
}
document.body.appendChild(component());