import React, { useState } from 'react';

import { IonPage, IonContent, IonItem, IonInput, IonLabel, IonButton, IonLoading } from '@ionic/react';

const LoginPage: React.FC = () => {
    const [busy, setBusy] = useState(false);

    return (
        <IonPage>
            <IonContent>
                <h1>Sign in</h1>
                <form onSubmit={() => {
                    setBusy(true)
                }}>
                    <IonItem>
                        <IonLabel>Email: </IonLabel>
                        <IonInput
                            data-testid='signin-email-input'
                            type='email'
                            name='email'
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Password: </IonLabel>
                        <IonInput
                            data-testid='signin-password-input'
                            type='password'
                            name='password'
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