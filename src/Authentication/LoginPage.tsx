import React from 'react';

import { IonPage, IonContent, IonItem, IonInput, IonLabel, IonButton } from '@ionic/react';

const LoginPage: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1>Sign in</h1>
                <form>
                    <IonItem>
                        <IonLabel>Email: </IonLabel>
                        <IonInput type='email' name='email'/>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Password: </IonLabel>
                        <IonInput type='password' name='password'/>
                    </IonItem>
                    <IonButton>Sign In</IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default LoginPage;