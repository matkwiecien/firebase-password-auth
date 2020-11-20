import React from 'react';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
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
    const submitButton = screen.getByRole('button', { name: /Sign In/i });

    //WHEN
    ionFireEvent.ionChange(emailInput, '')
    ionFireEvent.ionChange(passwordInput, '')
    ionFireEvent.click(submitButton);

    //THEN
    expect(await screen.findByText('loading')).toBeInTheDocument();
});

test('should not display loading indicator before submit', async () => {
    //GIVEN
    render(
        <AuthProvider>
            <LoginPage />
        </AuthProvider>
    );

    //THEN
    expect(screen.queryByText('loading')).not.toBeInTheDocument();
});

test('should display error message when email is invalid', async () => {
    //GIVEN
    render(
        <AuthProvider>
            <LoginPage />
        </AuthProvider>
    );
    const emailInput = screen.getByTestId('signin-email-input');
    const passwordInput = screen.getByTestId('signin-password-input');
    const submitButton = screen.getByRole('button', { name: /Sign In/i });

    //WHEN
    ionFireEvent.ionChange(emailInput, 'invalid@example.com')
    ionFireEvent.ionChange(passwordInput, 'validPassword%1')
    ionFireEvent.click(submitButton);

    //THEN
    expect(await screen.findByText('Invalid username')).toBeInTheDocument();
});

test('should display error message when password is wrond', async () => {
    //GIVEN
    render(
        <AuthProvider>
            <LoginPage />
        </AuthProvider>
    );
    const emailInput = screen.getByTestId('signin-email-input');
    const passwordInput = screen.getByTestId('signin-password-input');
    const submitButton = screen.getByRole('button', { name: /Sign In/i });

    //WHEN
    ionFireEvent.ionChange(emailInput, 'valid@example.com')
    ionFireEvent.ionChange(passwordInput, 'invalidPassword%1')
    ionFireEvent.click(submitButton);

    //THEN
    expect(await screen.findByText('Wrong password')).toBeInTheDocument();
});

test('should hide loading indicator when submit is finished', async () => {
    //GIVEN
    render(
        <AuthProvider>
            <LoginPage />
        </AuthProvider>
    );
    const emailInput = screen.getByTestId('signin-email-input');
    const passwordInput = screen.getByTestId('signin-password-input');
    const submitButton = screen.getByRole('button', { name: /Sign In/i });

    //WHEN
    ionFireEvent.ionChange(emailInput, 'valid@example.com')
    ionFireEvent.ionChange(passwordInput, 'validPassword%1')
    ionFireEvent.click(submitButton);

    //THEN
    const loadingIdicator = await screen.findByText('loading');
    await waitForElementToBeRemoved(loadingIdicator);
});