> Is this code production ready -> No
> there are lot of unusable code, spaces, comments 
and second thing there are 2 hyper links of React and React DOM.
when the code will execute, first the call will fetch all the pre written code.

> To save this call time, we can just copy paste all the React and React DOM code in to our file but it will increase the size of our file.
 here the concept of Bundler come in to action :

Bundler is not function of React, it is outsider package, which helps to make a production ready bundle of our required files. it only takes that code  of React and React DOM which is used in our programs to make it efficient.

There are different times of Bundler : Webpack, vite, parcel

we'll use parcel.

>>> npm install parcel
