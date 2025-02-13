// before react js

// let's assume we have to create some headers in our web page 

// let's create a header
// let header1 = document.createElement('h1');
// header1.innerHTML = 'This is a header 1';
// header1.style.color = 'white';
// header1.style.backgroundColor = 'green';

// // let's create another header
// let header2 = document.createElement('h2');
// header2.innerHTML = 'This is a header 2';
// header2.style.color = 'white';
// header2.style.backgroundColor = 'green';


// // let's create another header
// let header3 = document.createElement('h3');
// header3.innerHTML = 'This is a header 3';
// header3.style.color = 'white';
// header3.style.backgroundColor = 'green';


// let root = document.getElementById('root');
// root.appendChild(header1);
// root.appendChild(header2);
// root.appendChild(header3);

// here is the problem, if we have to create 100 headers then we have to write 100 lines of code

// Now try to do the same thing using functions in js
 

let CompFunction = {
    createHeader : function(elementToBeCreated, text, more){

        let element = document.createElement(elementToBeCreated);
    

        element.innerText = text;


        // more is an object
        for (let property in more){
            // property us more object ki key h
            // more[property] = kisi property(key) ki correspondence value 
            element.style[property] = more[property];
        }
        // document.body.append(element); // we'll do this using render function
        return element;
    }
       
}

let element = CompFunction.createHeader("h2","Hi! I'm Prashant",{ color: "yellow", backgroundColor: "blue", fontSize: "24px", padding: "10px" });

// Rendering -> any kind of manipulation in DOM
const render = {
    renderFun : function(element,root){

        root.append(element);

    }
}

let root = document.querySelector("#root");

render.renderFun(element,root);
