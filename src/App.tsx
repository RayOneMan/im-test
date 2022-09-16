import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute";
import Auth from "./pages/Auth/Auth";
import { SignIn } from "./components/SignIn/SignIn";

import EditUser from "./pages/EditUser/EditUser";
import Home from "./pages/Home/Home";
import { SignUp } from "./components/SignUp/SignUp";
import PublicRoute from "./hoc/PublicRoute";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Auth />
              </PublicRoute>
            }
          >
            <Route
              index
              element={
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
          </Route>
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <EditUser />
              </PrivateRoute>
            }
          />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
