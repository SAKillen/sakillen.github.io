# Heroku
Heroku is a cloud service intended to expedite application development, with various technologies working together to achieve this. The structure of Heroku, from highest and most-encompassing to the lowest and most specific designations can be categorized as follows:
* Flow - This is effectively the highest denomination of Heroku functionality. Flow brings together every other part of Heroku and streamlines both the function of and access to each of these pieces.
* CI - Short for Continuous Integration, CI manages automated testing whenever new code is pushed to the repository.
* Pipelines - Pipelines are groups of Heroku applications all sharing and operating on the same codebase. The four applications in any given pipeline are development, review, staging, and production. When changes are made to the codebase, those changes go through each application one at a time, ultimately deploying to end-users.

These components are useful for software development in general, but within the context of game development, Heroku's pieces are useful for different types of testing. These pieces, and their relevant testing areas, include but are not limited to:
* Dynos - Heroku's website define dynos as "isolated, virtualized Linux containers that are designed to execute code based on a user-specified command." Dynos, when configured in CI, can run tests every time a pull request is made. This makes dynos ideal for automated testing, unit testing, and integration testing.
* Review Apps - These are one-time-use applications that can be configure to run whenever a pull request is made. Their disposable nature makes them perfect for smoke testing.
