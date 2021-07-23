import React from 'react';
import Sigin from './Sigin';
import Dashboard from './Dashboard';
import Login from './Login';
import ForgetPassword from './ForgotPassword';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from './UpdateProfile';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update_profile" component={UpdateProfile} />
              <Route path="/signup" component={Sigin} />
              <Route path="/login" component={Login} />
              <Route path="/forgetPassword" component={ForgetPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
