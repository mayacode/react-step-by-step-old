## Lesson 2
**Create local state in Main component and child, dumb component which data from state and displays them.**

1. In `Main.js` add `state` object with default number of clicks - 0.
It is very important object, as in it many useful information can be stored.
I. e. number of clicks, clicked image in gallery, which should be magnified.
It can happen, that some objects should keep some local information and share
it only with their children.

2. Create new component `MyButton`. It is created in different way, no word `class`
is used. By default we plan to keep button as simple as possible. No logic
or complicated operations. We want it do display button and number of clicks.
In this case it is enough if the component is a function. It gets 2 props:
number of clicks to display it and click handler.

3. In Main component create `clickHandler` function, which should be an arrow function,
to have access to `this` object of class. Inside handler we increase number of clicks
with every click.

4. Main component becomes a **container**, **smart component** the react component where logic happens.
MyButton is a **dumb component**, which only uses what came in props.