import React,{useEffect} from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from '../store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DashboardScreen from '../screens/Dashboard/Dashboard';
import UserScreen from '../screens/User/User';
import LoginScreen from '../screens/Login/Login';
import MainScreen from '../screens/MainScreen/MainScreen';
import {Dimensions, Platform} from 'react-native';


export default function WebRoutes(){
        console.log('AUTHETICSTION CHANGED',store.getState().auth.isAuthenticated)
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                    {/* Private Routes */}
                    <Route
                    path="/MainScreen"
                    element={
                        <MainScreen />
                    }
                    />
                    <Route
                    path="/LoginScreen"
                    element={
                        <LoginScreen />
                    }
                    />
                    <Route
                    path="/DashboardScreen"
                    element={
                        <PrivateRoute>
                        <DashboardScreen />
                        </PrivateRoute>
                    }
                    />
                    <Route
                    path="/UserScreen"
                    element={
                        <PrivateRoute>
                        <UserScreen />
                        </PrivateRoute>
                    }
                    />
                    {/* Redirect to login if no route matches */}
                    <Route path="*" element={<h1>NotFound</h1>} />
                </Routes>
                </Router>
            </PersistGate>
        </Provider>
      );
  
};

