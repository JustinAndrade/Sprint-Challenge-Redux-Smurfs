1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

3 Javascript Array/Objects methodsa are map, every, and forEach.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions = and action type and some data we asssociate with that action type
reducers = the functionality of these actions
store = the state of the application

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

the difference between application state and component state is mutability, application state is immutable.


1.  What is middleware?

middleware is a function that returns a function that returns a function;
ex: const middleware = store => next => action => {

};

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk  allows us to make the flow asynchronous, which allows our actions able to make async API calls.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect({})()  allows us to connect components to the redux store.
