import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from './context/AuthContext';
import { Link, Redirect } from 'react-router-dom';

export default function Dashboard() {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError(' ');
    try {
      await logout();
    } catch {
      setError('There was error while logging out');
    }
  }
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Card>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Body>
          <h2 className="text-center">Login</h2>
          <h3 className="mt-3"> {currentUser.email}</h3>
          <Link className="btn btn-primary w-100 mt-3" to="/update_profile">
            Update Profile
          </Link>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
}
