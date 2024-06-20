import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import Provider from "./Provider/Provider"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Provider />}>
      <Route path='/' element={<HomePage />}></Route>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
