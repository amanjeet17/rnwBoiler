import { useEffect } from "react";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";
import { useSelector } from 'react-redux';

export default function AppRoutes(){
    const auth = useSelector(state => state.auth);

    useEffect(()=>{ 
        // console.log('AUTHETICSTION CHANGED',auth.isAuthenticated)
    },[auth.isAuthenticated])
    console.log('AppRoutes AUTHETICSTION CHANGED',auth)
    
    if(auth.isAuthenticated===true){
        return <PrivateRoutes />
    }
    return <PublicRoutes/>
}
