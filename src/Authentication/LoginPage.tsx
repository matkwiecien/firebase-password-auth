import React, { useState } from 'react';
import { useFormik } from 'formik';

import { IonPage, IonContent, IonItem, IonInput, IonLabel, IonButton, IonLoading } from '@ionic/react';

const LoginPage: React.FC = () => {
    const [busy, setBusy] = useState(false);
    const { values, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            setBusy(true);
        }
    });

    return (
        <IonPage>
            <IonContent>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
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
                    <IonButton>Sign In</IonButton>
                </form>
            </IonContent>
            <IonLoading isOpen={busy} />
        </IonPage>
    )
}

export default LoginPage;