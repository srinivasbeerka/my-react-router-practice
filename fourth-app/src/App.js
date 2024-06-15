import React from "react";
import Home from "./1-ReactRouter/Home";
import About from "./1-ReactRouter/About";
import Contact from "./1-ReactRouter/Contact";
import {Routes,Route} from "react-router-dom"
import Navbar from "./1-ReactRouter/Navbar";
import Success from "./1-ReactRouter/Success";
import NotFound from "./1-ReactRouter/NotFound";
import Projects from "./1-ReactRouter/Projects";
import FeaturedProjects from "./1-ReactRouter/FeaturedProjects";
import NewProjects from "./1-ReactRouter/NewProjects";
import Users from "./1-ReactRouter/Users";
import UserDetails from "./1-ReactRouter/UserDetails";
import Login from "./1-ReactRouter/Login";
import PrivateRoute from "./1-ReactRouter/PrivateRoute";
import { AuthProvider } from "./1-ReactRouter/Auth";
import Logout from "./1-ReactRouter/Logout";

const LazyAbout= React.lazy(()=> import('./1-ReactRouter/About'))   //it is known for lazy loading,it is used to reduce the load of loading  speed



function App() {
  return (
    <AuthProvider className="App">
        <Navbar/>
         <Routes>
          
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route
             path="/about"
             element={
              <React.Suspense fallback="loading...">
                 <LazyAbout/>
              </React.Suspense>
             }
           />
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/success" element={<Success/>}/>
           <Route path="*" element={<NotFound/>}/>
           
           <Route path="/projects" element={<Projects/>} >
              <Route index element={<FeaturedProjects/>}/>
              <Route path="featured" element={<FeaturedProjects/>}/>
              <Route path="new" element={<NewProjects/>}/>
           </Route>

           {/* <Route path="/users" element={<Users/>}/> */}
           <Route path="/users/:userId" element={<UserDetails/>}/>

           <Route path="/login" element={<Login/>}/>
           <Route path="/logout" element={<Logout/>}/>

           <Route
          path="/users"
          element={
          <PrivateRoute>
               <Users/>
          </PrivateRoute>}/>


         </Routes>
    </AuthProvider>
  );
}

export default App;
