import React, { useState } from 'react';
import { useFormik } from 'formik';

import { IonPage, IonContent, IonItem, IonInput, IonLabel, IonButton, IonLoading } from '@ionic/react';

import { auth } from 'Firebase/modules/firebase';

import ErrorMessage from 'Components/ErrorMessage';

const LoginPage: React.FC = () => {
    const [busy, setBusy] = useState(false);
    const { errors, values, handleSubmit, setFieldValue, setFieldError } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            setBusy(true);

            try {
                await auth.signInWithEmailAndPassword(values.email, values.password);
            }
            catch (err) {
                if (err.code === 'auth/wrong-password') {
                    setFieldError('password', 'Wrong Password')
                }
                else {
                    setFieldError('email', 'Invalid username');
                }
            }
            setBusy(false);

        }
    });

    return (
        <IonPage>
            <IonContent>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    {errors.email ?
                        <ErrorMessage>Invalid username</ErrorMessage>
                        : null
                    }
                    <IonItem>
                        <IonLabel>Email: </IonLabel>
                        <IonInput
                            data-testid='signin-email-input'
                            type='email'
                            name='email'
                            value={values.email}
                            onIonChange={(evt) => setFieldValue('email', evt.detail.value)}
                        />
                    </IonItem>
                    {errors.password ?
                        <ErrorMessage>Wrong password</ErrorMessage>
                        : null
                    }
                    <IonItem>
                        <IonLabel>Password: </IonLabel>
                        <IonInput
                            data-testid='signin-password-input'
                            type='password'
                            name='password'
                            value={values.password}
                            onIonChange={(evt) => setFieldValue('password', evt.detail.value)}
                        />
                    </IonItem>
                    <IonButton type='submit'>Sign In</IonButton>
                </form>
            </IonContent>
            <IonLoading isOpen={busy} />
        </IonPage>
    )
}

export default LoginPage;