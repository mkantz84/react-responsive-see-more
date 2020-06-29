# react-see-more

A simple React component that renders a list (array) of components and show them responsively in **one row**.

![React See More example](/example/example.gif)

## How to use

Run:

- `npm i react-responsive-see-more`

Usage:

```
import SeeMore from 'react-responsive-see-more'
...
...
<SeeMore
    items={renderItems()}
    itemWidth={170}
    seeMoreButtonClassName="items-with-pictures--item--content"
    seeMoreURL={seeMoreURL}
    seeMoreButtonnText={getString('SEE_ALL_RESULTS')}
/>
```

## Available props

```

className: string (optional)

```

To customise this component, pass in a class name to the `className` prop and style that class name in your custom CSS.

```

// your-component.js
import Dummy from 'dummy-counter'

...
<Dummy className="dummy" />
...

// your-component.css
.dummy {
  color: white;
  background-color: purple;
}

```

**This component was built for an article on how to publish a React component as a package to npm.**
