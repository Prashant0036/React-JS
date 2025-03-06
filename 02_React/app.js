import React from "react";
import ReactDOM from "react-dom/client";

console.log(React);
console.log(ReactDOM);
console.log(typeof React); //object
console.log(typeof ReactDOM); //object

// Let's create our first element using react
let element1 = React.createElement("h1",{id:"hding1",className:"Headings"},"Hi I'm created using React");
let root = document.getElementById("root");
// ReactDOM.render(element1,root);
// react-dom.development.js:73 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

// Insted of this, give the full control of this root to React.
let ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(element1); // now we've inserted this h1 element in DOM successfully.

let element2 = React.createElement("h2",{id:"hding2",className:"Headings",style:{color:"white",backgroundColor:"green"}},"I'm heading 2");
ReactRoot.render(element2); // but it will replace previously rendered h1 element.

// beacuse only one child can be rendered in root, so what will we do, we'll wrap all the elements in one div, then render.

let div1 = React.createElement("div",{id:"div1",className:"divs",style:{border:"1px solid black"}},[element1,element2]);
ReactRoot.render(div1);



// npx parcel index.html  TO RUN index.html on server

// npx parcel build index.html TO make production ready files

// there will be 3 files to deploy in dist folder, 1. .js, 2. .map [to recover original JS file], 3. .html file
// we can just remove that .map file if we want and doesn't need to deploy this map file in production