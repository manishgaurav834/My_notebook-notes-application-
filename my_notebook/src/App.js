import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import NoteState from './context/NoteState';
import Home from './components/Home';
import EditState from './context/EditState';
import Loginpage from './components/Loginpage';
import AuthState from './context/authState';
import Signin from './components/Signin';








function App() {
  const router= createBrowserRouter([
    {path:'/' , element:<><Nav/><Home/></>},
    {path:'/login',element:<><Nav/><Loginpage/></>},
    {path:'/signup',element:<><Nav/><Signin/></>}
  ])
  return (
    <>
    <AuthState>
    <EditState>
    <NoteState>
    <RouterProvider router={router}/>
    </NoteState>
    </EditState>
    </AuthState>
    </>
  );
}

export default App;
