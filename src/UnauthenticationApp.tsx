import React from 'react';
import { IonApp, IonContent, IonPage } from '@ionic/react';

const UnauthenticatedApp: React.FC = () => (
    <IonApp>
        <IonPage>
            <IonContent>
                <div>
                    Sign in
                </div>
            </IonContent>
        </IonPage>
  </IonApp>
)

export default UnauthenticatedApp;