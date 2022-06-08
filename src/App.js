import React, {useReducer} from 'react';
import './App.css';
import useCombinedReducers from 'use-combined-reducers';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from './Theme';
import {DispatchContext, StateContext} from './store';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './view/Home';
import './assets/StyleSheets/_utility.scss';
import {routes} from './routes/Routes';
import {protectedRoutes} from './routes/ProtectedRoutes';
import {ProtectedMain} from './layouts/Admin/ProtectedMain/ProtectedMain';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/SignUp/SignUp';
import {
  initialUser,
  loaderReducer,
  loaderStateReducer,
  loaderValue,
  snackbarReducer,
  snackbarValue,
  userReducer
} from './reducers';
import {ApiUtils} from './utils/ApiUtils';
import Notify from './common/Snackbar/Snackbar';
import Loader from './common/Loader/Loader';

function App() {
  const [state, dispatch] = useCombinedReducers({
    user: useReducer(userReducer, initialUser),
    notifyMessage: useReducer(snackbarReducer, snackbarValue),
    loader: useReducer(loaderReducer, loaderValue),
    loaderState: useReducer(loaderStateReducer, true),
  });

  // const isRouteEnabled = (userData, authorized) => {
  //   const dataList = userData?.data?.relationships?.roles?.data;
  //   const roles = includedObjectList(dataList, userData?.included);
  //   return authorized?.length === 0 ? true : (isAuthorized(roles, authorized));
  // };

  ApiUtils.dispatch = dispatch;
  ApiUtils.state = state;
  return (
    <ThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <Notify/>
          <Loader/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}>
                {routes.length > 0 && routes.map((route, index) => (
                  <Route
                    key={index}
                    element={route.component}
                    path={route.path}
                  />
                ))}
              </Route>
              <Route path="/admin"
                     element={state?.user?.authenticated ? <ProtectedMain/> :
                       <Navigate to={'/login'} replace/>}>
                {protectedRoutes.map((route, index) => (
                  <Route
                    key={index}
                    {...route}
                    element={route.component}
                    path={route.path}
                  />
                ))}
              </Route>
              <Route path="/login" element={<Login/>}/>
              <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
          </BrowserRouter>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </ThemeProvider>
  );
}

export default App;
