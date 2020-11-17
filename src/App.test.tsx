import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

import { auth } from 'Firebase/modules/firebase';

import AuthProvider from 'Firebase/components/AuthProvider';

test('should display loading indicator until authentication is checked', async () => {
  //GIVEN
  render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );

  //THEN
  expect(await screen.findByText('loading')).toBeInTheDocument();  
});

test('should display Home page when firebase authenticated user', async () => {
  //GIVEN
  render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );

  //WHEN
  await waitFor(() => {    
    // eslint-disable-next-line  
    auth._fireAuthStateChanged({email: "test@example.com"})
  }) 
  
  //THEN
  expect(screen.getByText('Home')).toBeInTheDocument();  
});

test('should display Login page when firebase does not authenticated user', async () => {
  //GIVEN
  render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );

  //WHEN
  await waitFor(() => {    
    // eslint-disable-next-line  
    auth._fireAuthStateChanged(null)
  })   

  //THEN
  expect(screen.getByText('Sign in')).toBeInTheDocument();  
});