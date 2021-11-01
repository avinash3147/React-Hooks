# React Hooks

## Use State

## What is a hook:
If you want to write a function componenet and realize you need to add some state to it, previously you have to it into class. Now yyou can use a hook inside the existing function component

starts with use
component must be uppercase
must be inside component / function body
cannot call conditionally - if (hook) can't be used

Update Array Example

## UseState:
- if we want to re-render component by preserving the state


## UseEffects:
* used when we have sideeffects
* side effects outside the component
* changing document title, fetching data, listeners etc..
* Whenever component is rendered use effect is called
* if we only want useeffect on initial render then we pass empty array [] to useeffect
* render on every update - [value]

we can't use if conditions in jsx. for that we can use short circuit function or ternary operator

## Forms
* every input should have value attribute binded to state prop and onchange handler
* form submission can be handled in two waays onSubmit in form tag or onClick in button


## UseRef
* preserves values like useState
* * doesn't trigger re-render 
* target DOM nodes/elements

REVISIT USEREF AND NAVBAR PROJECT

## UseReducer
* use when we have more complex state strutcure
* if simple strutcure then we can use usestate
* * for usereducer we have state and dispatch function.
* const [state, dispatch] = useReducer(reducer, defaultState) -> 
* reducer arg is a function which takes in two args state and action
* DefaultState has all prop wwith default values


## CustomHooks
* Reuse Functionality not html
* * always starat wth use

## PropTypes
* porp types allowws us to validate props

## React Memo
* when we click on button useeffect will be rerendered everytime when component re renders
* If we encapsulate a component with React.memo then it will re render only if prop of that particular component chanegs

## Usecallback
* usecallback() 