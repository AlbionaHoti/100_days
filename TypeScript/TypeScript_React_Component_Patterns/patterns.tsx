import React from 'react';
/*
    Basic function components

    When using fucntion components without any props you don't have the need to use extra types.

    Everything can be inferred. In old-style functions, as well as in arrow functions.
*/

function Title() {
    return <h1>Welcome to this application</h1>;
}

/*
    Props

    When using props we name props usually according to the component we're writing,
    with Props-suffix. No need to use FC component wrappers or anything similar.

*/

type GreetingProps = {
    name: string;
}

function Greeting(props: GreetingProps) {
    return <p>Hi {props.name}</p>
}

// Destructuring makes it even more readable

function Greeting2({name}: GreetingProps) {
    return <p>Hi {name}</p>;
}

/*
    Default props

    Instead of setting default props, like in class-based React, it's easier to set default values
    to props. We mark props with a default value optional (see the question-mark operator). The default
    value makes sure that `name` is never undefined.
*/

type LoginMsgProps = {
    name?: string;
}

function LoginMsg({name: "Guest"}: LoginMsgProps) {
    return <p>Logged in as {name}</p>;
}

/*
    Children

    Instead of using `FC` or `FunctionalComponent` helpers we prefer to set `children` explicitly, so it
    follows the same pattern as other components. We set `children` to type `React.ReactNode` as it accepts most (JSX elements, strings, etc).
*/

type CardProps = {
    title: string;
    children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
    return (
        <section className="cards">
            <h2>{title}</h2>
            {children}
        </section>
    )
}


/*

    When we set `children` explicitly, we can also make sure that we `never` pass any children.
*/

// this throws errors when we pass children

type SaveButtonProps = {
    // ... whatever
    children: never
}

/*
    WithChildren helper type

    A custom helper type helps us to set `children` easier.
*/

type WithChildren<T = {}> =
    T & { children?: React.ReactNode };

type CardProps = WithChildren<{
    title: string;
}>;

// This is very similar to FC, but with the default generic parameter to `{}`, it can be much more flexible:

// works as well

type CardProps = { title: string } & WithChildren;

/*
    If you're using Preact, you can use `h.JSX.Element` or `VNode` as a type instead of `React.ReactNode`
*/

/*
    Spread attributes to HTML elements

    Spreading attributes to HTML elements is a nice feature qhere you can make sure that you are able to set all the
    HTML properties that an element has without knowing upfront which you want to set. 

    You can pass them along. Here's a button wrapping component where we spread attributes.

    To get the right attributes, we access a `button`'s props through `JSX.InstrinsicElements`.

    This includes `children`, we spread them along.
*/

type ButtonProps = JSX.InstrinsicElements["button"];

function Button({ ...allProps }: ButtonProps) {
    return <button {...allProps} />;
}

/*
    Preset attributes

    Let's say we want to preset `type` to `button` as the default behavior `submit` tries to send a form,
    and we just want to have things clickable. We can get type safety by omitting `type` from the set of button props.
*/

type ButtonProps = Omit<JSX.InstrinsicElemets["button"], "type">;

function Button({ ...allProps }: ButtonProps) {
    return <button type="button" {...allProps} />
}

// This breaks, as we omitted type