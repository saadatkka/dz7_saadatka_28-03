import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Todo from "./pages/Todo.jsx";
import Form from "./pages/Form.jsx";
import Slider from "./pages/Slider.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='todo' element={<Todo/>}/>
                <Route path='form' element={<Form/>}/>
                <Route path='slider' element={<Slider/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
