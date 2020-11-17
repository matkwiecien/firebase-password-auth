import React, { useContext } from 'react';
import { IonLoading } from '@ionic/react';

import { AuthContext } from 'Firebase/components/AuthProvider';
import FirebaseStatus from 'Firebase/consts/FirebaseStatus';

import UnauthenticatedApp from 'UnauthenticationApp';
import AuthenticationApp from 'AuthenticationApp';

const App = () => {
  const { status } = useContext(AuthContext);
  return (
    <>
      { status === FirebaseStatus.CHECKING ? <IonLoading isOpen/> : null}
      { status === FirebaseStatus.UNAUTHENTICATED ? <UnauthenticatedApp /> : null }
      { status === FirebaseStatus.AUTHENTICATED ? <AuthenticationApp /> : null }
    </>
  );
}

export default App;
