import React from 'react';

import { render, screen } from '@testing-library/react';
import { ionFireEvent } from '@ionic/react-test-utils'
import AuthProvider from 'Firebase/components/AuthProvider';
import LoginPage from './LoginPage';

test('should display loading indicator after submit sign in credentials until sign', async () => {
    //GIVEN
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    const emailInput = screen.getByTestId('signin-email-input');
    const passwordInput = screen.getByTestId('signin-password-input');
    const submitButton = screen.getByRole('button', {name: /Sign In/i});

    //WHEN
    ionFireEvent.ionChange(emailInput, '')
    ionFireEvent.ionChange(passwordInput, '')
    ionFireEvent.click(submitButton);


    //THEN
    expect(await screen.findByText('loading')).toBeInTheDocument();  
  });