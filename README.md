# react-responsive-see-more

A simple React component that renders a list (array) of components and show them responsively in **one row**.

![React See More example](/example/example.gif)

## How to use

Run:

`npm i react-responsive-see-more`

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

## Props

| Prop                   |        Type         |                                                                       Description |
| ---------------------- | :-----------------: | --------------------------------------------------------------------------------: |
| items                  | `React.ReactNode[]` |                                         Array of components that will be rendered |
| itemWidth              |      `number`       | The width of one item in the components list. This is for responsive calculations |
| seeMoreURL             | `string` (Optional) | A URL for the see more button. If you wont pass this prop, the button wont render |
| className              | `string` (Optional) |                                                Class name for the package wrapper |
| seeMoreButtonClassName | `string` (Optional) |                                        Class name for the see more button wrapper |
| seeMoreButtonText      | `string` (Optional) |                                                      Text for the see more button |

## License

react-responsive-see-more is released under MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.
