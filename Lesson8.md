## Lesson 8
**React Context use case**

1. React Context gives us, after all other useful things, the solution for passing props from parent to
grand(grand...)children without passing them through all components which are between. It has an impact on
application performance, as reduces not needed re-rendering of components which didn't use the props, just pass
them to their children.
