import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from './Theme';
import {DispatchContext, StateContext} from './store';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './view/Home';
import './assets/StyleSheets/_utility.scss';
import {routes} from './routes/Routes';
import {protectedRoutes} from './routes/ProtectedRoutes';
import {ProtectedMain} from './layouts/Admin/ProtectedMain/ProtectedMain';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/SignUp/SignUp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DispatchContext.Provider>
        <StateContext.Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                {routes.length > 0 && routes.map((route, index) => (
                  <Route
                    key={index}
                    element={route.component}
                    path={route.path}
                  />
                ))}
              </Route>
              <Route path="/admin" element={<ProtectedMain />}>
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
