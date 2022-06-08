import React from 'react';
import { Route,Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes =({component:Component,...rest})=>{
   const token= window.localStorage.token;
   return (
       token ? <Outlet/> :<Navigate to='/signin'/>
   )

}

export default PrivateRoutes