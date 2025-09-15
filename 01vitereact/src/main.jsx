import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'


//custom element does not work like this in react we don't have to do like this because after all this it can be transpile by babble and it always takes it in object form

// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit'
// }

const another_element=(
  <a href='https://google.com' target='_blank'>
    Click to visit Google
  </a>
)

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  // 'click me to visit google'
  another_element
)
ReactDom.createRoot(document.getElementById('root')).render(
    reactElement
)
