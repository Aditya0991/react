import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
      <div>
          <h1>Custom App!</h1>
      </div>
  );
}

// const ReactElement ={
//     type : 'a',
//     props:{
//         href:'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement =(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const ReactElement = React.createElement(
    'a',
    {href:'https://google.com' , target:'_blank'},
    'click me google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    ReactElement
    //<ReactElement />  // -->Better way because no need to parseing

    //It can also be written as 
    // MyApp()
)
