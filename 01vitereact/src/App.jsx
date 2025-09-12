//for including more than one components or elements we can do it by including in div like make one element and inside it we can insert all components
//but int vite we can do it in <> </> by this it is called fragments.

//but in react we can make the component name file in small case but its functions name should be in capital letter
//but in vite we should make the file name also in capital letter

//for exporting the component we can use export default or named export
//but while importing the component if we use named export we should use {} while importing
//but if we use export default we can import directly without {}


import Chai from "./Chai"
function App() {
  return (
    <>
    <Chai/>
    <h1> hello this is from App file which includes the chai component as reusing it</h1>
    </>
  )
}

export default App
