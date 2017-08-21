import _ from 'lodash';
import './style.css';
import icon from './icon.jpg';
import printMe from './print.js';

function component() {
    var element = document.createElement("div");
    var btn = document.createElement("button");
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    btn.value = 'click';
    btn.style.cssText = "width:200px;height:200px;display:block";
    btn.onclick=printMe;
    let myImg = new Image();
    myImg.src = icon;
    element.appendChild(myImg);
    element.appendChild(btn);
    console.log(22);
    return element;
}
let element=component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        document.body.removeChild(element);
        element=component();
        document.body.appendChild(element);
        printMe();
    })
}