import './App.css'
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Faq} from "./pages/help/Faq.jsx";
import {Form} from "./pages/help/Form.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";
import {RootLayout} from "./layout/RootLayout.jsx";
import {ContactLayout} from "./layout/ContactLayout.jsx";
function App() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<ContactLayout/>}>
                    <Route path="faq" element={<Faq/>}/>
                    <Route path="form" element={<Form/>}/>
                </Route>
            </Route>
        )
    )
    return (
        <div className="App">
            <RouterProvider router={routes}/>
        </div>
    )
}

export default App
