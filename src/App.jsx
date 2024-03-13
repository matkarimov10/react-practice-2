import "./App.css";
// react-router-dom
import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom"; // v6...

// pages
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Faq} from "./pages/help/Faq";
import {Form} from "./pages/help/Form";
import {ErrorPage} from "./pages/ErrorPage.jsx";
import {Articles} from "./pages/articles/Articles";

// layouts
import {RootLayout} from "./layout/RootLayout";
import {ContactLayout} from "./layout/ContactLayout";
import {ArticlesLayout} from "./layout/ArticlesLayout";
import {ArticlesDetail} from "./pages/articles/ArticlesDetail.jsx";

export function App() {
    const routes = createBrowserRouter([
        {
            path:'/',
            element: <RootLayout/>,
            errorElement: <ErrorPage />,
            children:[
                {
                  index: true,
                  element:<Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/contact',
                    element:<ContactLayout/>,
                    children:[
                        {
                            path:'faq',
                            element:<Faq/>
                        },
                        {
                            path:'form',
                            element:<Form/>
                        }
                    ]
                },
                {
                    path:'/articles',
                    element:<ArticlesLayout/>,
                    children:[
                        {
                            index: true,
                            element:<Articles/>
                        },
                        {
                            path:':id',
                            element:<ArticlesDetail/>
                        }
                    ]
                },
                // {
                //     path:'*',
                //     element:<ErrorPage/>
                // }
            ]
        }
    ]);

    return (
        <div className="App">
            <RouterProvider router={routes} />
        </div>
    );
}
// <Route path="/" element={<RootLayout />}>
//     <Route index element={<Home />} />
//     <Route path="about" element={<About />} />
//     <Route path="contact" element={<ContactLayout/>}>
//         <Route path="faq" element={<Faq/>}/>
//         <Route path="form" element={<Form/>}/>
//     </Route>
//     <Route path="articles" element={<ArticlesLayout/>}>
//         <Route index element={<Articles/>}/>
//         <Route path=":id" element={<ArticlesDetail/>}/>
//     </Route>
//     {/* PAGE NOT FOUND */}
//     <Route path="*" element={<ErrorPage/>}/>
// </Route>