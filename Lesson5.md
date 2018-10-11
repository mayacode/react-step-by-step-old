## Lesson 5
**Introduction of unit tests and snapshots**

1. For writing tests we will use `jest` and `enzyme`.

2. As jest will need access to babel settings we will move them from
`webpack.config.js` to `.babelrc` file.

3. Let's use `BookListItem.js` as our model component for tests. It is simple
and we only need to make a snapshot of it, to test everything.

4. Let's name our test file `BookListItem.test.js`. In `package.json` in section
`jest` is information, how testing framework should find test files. Also creating
separate directory with name `tests` is very popular.

5. In test file, we need to import React and `shallow` from enzyme. Shallow is
a function which reads component and creates a shallow copy of it. It means
no nested components will be taken in consideration, only plain HTML of tested component.
It makes snapshot file smaller and forces developer to test every, even the smallest,
component separately.

6. If something will change in props coming into component or in HTML of
component, it will be reflected in tests (test of changed component will fail).
If the change was planned we can update snapshot using command:
`npm run test -- --updateSnapshot`.