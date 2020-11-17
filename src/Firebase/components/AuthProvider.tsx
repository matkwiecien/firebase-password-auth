import React, { useEffect, useState } from 'react';

import FirebaseStatus from 'Firebase/consts/FirebaseStatus';

import { auth } from './../modules/firebase';

type AuthContextValue = {
    status: FirebaseStatus,
}

export const AuthContext = React.createContext<AuthContextValue>({
    status: FirebaseStatus.CHECKING
})

const AuthProvider: React.FC = ({children}) => {
    const [ status, setStatus ] = useState<FirebaseStatus>(FirebaseStatus.CHECKING)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if(user) {
                setStatus(FirebaseStatus.AUTHENTICATED)
            }
            else {
                setStatus(FirebaseStatus.UNAUTHENTICATED)
            }
        });
        return unsubscribe
    }, [])
    return (
        <AuthContext.Provider value={{ status }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;