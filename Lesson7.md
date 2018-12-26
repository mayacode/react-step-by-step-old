## Lesson 7
**Redux and application store**

1. Keeping data in the component state helps a little, but in case the same data should be shared more wide
it doesn't help at all. Here comes redux or mobX or flux or any other library which allows you to store your data
and make them available for all application.

2. Redux uses publisher-subscriber pattern. Data flow in one direction. From component (for example user types
something in input field) through actions, which are published, to reducer, which listens on actions and regarding
type of the action makes some changes in store and updates it and then updates store to any component, which awaits
those data.

3. In redux **very important** is remembering about difference between _shallow_ and _deep_ copy.
```
const a = { a: 1, b: 2, c: 'something'};
const b = a;
const c = {...a};

b.c = 'else';
```

making change in `b.c` will affect both `a` and `b` objects, as they use the same reference to object. `c` as a shallow
copy is safe. This example object has only one level of properties, so shallow copy made by three dots operator is
efficient.
```
var d = {a: {b: [1, 2, 3], c: true}, d: 'something'};
var e = {...d};
e.a.b[1] = 10;
```

`e.b[1] = 10;` makes changes in both objects `d` and `e`, as `e` is a shallow copy of `d`. It means, that everything
that is deeper than on first level is passed by reference. Changing `e.d` will affect only `e`.

The solution is to remember about that.

```
var d = {a: {b: [1, 2, 3], c: true}, d: 'something'};
var e = {...d, a: {...d.a, b: [...d.a.b]}};
e.a.b[1] = 10;
```
It is not the easiest way, but definitely less error prone.
