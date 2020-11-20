import React from 'react';

import { IonItem, IonLabel } from '@ionic/react';

const ErrorMessage: React.FC = ({ children }) => (
    <IonItem color="danger">
        <IonLabel>{children}</IonLabel>
    </IonItem>
)

export default ErrorMessage;