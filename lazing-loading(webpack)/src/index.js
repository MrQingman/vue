import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    var button = document.createElement("button");
    var btn = document.createElement("br");
    button.innerHTML = "click me and look at the console!";
    element.innerHTML = _.join(['hello', 'webpack'], " ");
    element.appendChild(btn);
    element.appendChild(button);

    button.onclick = e =>import (/* webpackChunkName: "aa" */ './print').then(module => {
            console.log(111);
            var print = module.default;
            print();
        })

    return element;
}
document.body.appendChild(component());