## Lesson 4
**Make an API call after user action and add response to state.**

1. create an `container`, smart component, which will store information
about book search. Let's use open Google Books API accessible without authorisation.

2. Add 2 `dumb components` for searching and displaying data. In container, in
store, keep keyword (searching phrase) and list of results (remember, that by
default API will return only 10 records).

3. Every component implements lifecycle methods which allow taking care of
different situation in application. Here you can see
[the diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
and [documentation](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
of component's lifecycle. Please read it every time you feel not sure what and
why is happening.

4. React forces clean data flow architecture, where data flow goes in **one
direction only**. It makes rendering much more performant and testing
and debugging easier. In general it means, that if user makes an action
(i. e. clicks button) which is implemented (applications listens on this event)
this action is fired and any change in component state must be done using `setState`
method. Changing the state outside this method will not effect with re-rending
(if state changed). This method forces data flow. New state and existing props
come again to component and all lifecycle methods are fired one by one including
`render` method.

5. For book search on every change of typed phrase `onChange` event is fired.
It only updates the state. Then the new state comes to the container (where the state
exists). Changed `keyword` doesn't fire re-rendering of child components, as it
is not used in any of them. But the new state causes fire all of lifecycle methods
for `updating`. It gives us access to `componentDidUpdate` where we can compare
old and new keyword and decide if it is a time to make an API request. If there
is no other need all API requests should happen in methods with `Did` in name
(`componentDidMount`, `componentDidUpdate`) or in `componentWillUnmount`. It will
prevent the situation where rendering view is delayed by some code.