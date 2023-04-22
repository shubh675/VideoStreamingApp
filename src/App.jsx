import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import { Header,Footer,SearchFeed,VideoDetails,Feed,ChannelDetails } from "./Components";

const AppLayout= () => {
  return <div className="layout">
   <Header />
   <Outlet />
   <Footer />
  </div>
};

const App =()=>{
  const AppRouter = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children:[
        {
          path:"/",
          element: <Feed />
        },{
          path:"/video/:id",
          element:<VideoDetails />
        },{
          path:"channel/:id",
          element:<ChannelDetails />
        },
       { path:"search/:searchText",
        element:<SearchFeed />}
      ]
     
    }
  ]); 
 

  return <RouterProvider router={AppRouter}/>
}





export default App;
