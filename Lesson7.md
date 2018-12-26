## Lesson 7
**Redux and application store**

1. Keeping data in the component state helps a little, but in case the same data should be shared more wide
it doesn't help at all. Here comes redux or mobX or flux or any other library which allows you to store your data
and make them available for all application.

2. Redux uses publisher-subscriber pattern. Data flow in one direction. From component (for example user types
something in input field) through actions, which are published, to reducer, which listens on actions and regarding
type of the action makes some changes in store and updates it and then updates store to any component, which awaits
those data.
