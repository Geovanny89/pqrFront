
import React from 'react';
import {  Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function ProtectedRoute({ children }) {
  const sessionToken = Cookies.get('session');
  if (sessionToken && Object.keys(sessionToken).length > 0) {
    return children;
  }

  return <Navigate to="/login" />;
}