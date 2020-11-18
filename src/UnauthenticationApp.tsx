import React from 'react';
import { IonApp } from '@ionic/react';

import LoginPage from './Authentication/LoginPage';

const UnauthenticationApp: React.FC = () => (
    <IonApp>
        <LoginPage />
    </IonApp>
)

export default UnauthenticationApp;