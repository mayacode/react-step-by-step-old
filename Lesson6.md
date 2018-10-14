## Lesson 6
**Eslint and prop types**

1. This is a time we have to start to think about readability and basic
documentation of our code. Of course we should to think about it from
the very beginning of the project, but for learning purposes we need
to see the living code to understand what is happening.

2. Code readability is most important thing. It is obvious that with time
some developers will leave the project and some new will come. It means code
must be consistent. Every file should follow the same rules. It helps new
people in team to understand the code and follow the rules.

3. Documentation is not less important, but to be honest, I don't know the project
where docs are always up-to-date. Of course Docs for external users must
be updated, as this is kind of a business card for the project. But internal
docs are mostly not touched. It means our code must be self-documenting. It
means we should use meaningful variable names, but it also means we should to
clarify what kind of data our component expects.

4. For such purposes in almost every programming language is `lint`
available. It is a library, which checks if our code align to defined rules.
In our project we will use `eslint` with basic rules.

5. Eslint configured for react expects that every component will have
`displayName` and `propTypes` defined. It forces some changes in the code.

6. For react prop types new library is needed - `prop-types`. It delivers
many useful ways of describing props which come to the component.
