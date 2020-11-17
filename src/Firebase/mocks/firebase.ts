class MockFirebaseError extends Error {
    code: string;

    constructor(code: string, message: string) {
        super(message);
        this.code = code;

        Object.setPrototypeOf(this, MockFirebaseError.prototype);
      }
}

const firebase = {
    
    initializeApp: () => {
    },
    auth: () => ({        
        authStateChangedCallbacks: [] as any[],
        _fireAuthStateChanged: function(user: any) {
            this.authStateChangedCallbacks.forEach(element => {
                element(user)
            });
        },
        signInWithEmailAndPassword: async function(email: string, password: string) {
            if (email === 'invalid@example.com') {
                throw new MockFirebaseError('auth/invalid-email', '')
            }

            if (email === 'notfound@example.com') {
                throw new MockFirebaseError('auth/user-not-found', '')
            }

            if (email === 'disabled@example.com') {
                throw new MockFirebaseError('auth/user-disabled', '')
            }

            if (email === 'notallowed@example.com') {
                throw new MockFirebaseError('auth/operation-not-allowed', '')
            }

            if (password === 'invalidPassword%1') {
                throw new MockFirebaseError('auth/wrong-password', '')
            }
            
            if (email === "valid@example.com" && password === "validPassword%1") {
                setTimeout(() => this.authStateChangedCallbacks.forEach(cb => cb({email})), 0)
                return;
            }

            throw new Error("Wrong credentials");
        },

        createUserWithEmailAndPassword: async function(email: string, password: string) {
            if (email === 'alreadyinuse@example.com') {
                throw new MockFirebaseError('auth/email-already-in-use', '')
            }

            if (email === 'invalid@example.com') {
                throw new MockFirebaseError('auth/invalid-email', '')
            }

            if (password === 'weakPassword') {               
                throw new MockFirebaseError('auth/weak-password', '')
            }
            
            if (email === "blocked@example.com") {
                throw new MockFirebaseError('auth/operation-not-allowed', '')
            }

            if (email === "new_email@example.com" && password === "new_validPassword%1") {
                setTimeout(() => this.authStateChangedCallbacks.forEach(cb => cb({email})), 0)
                return;
            }

        
            throw new Error("Wrong credentials");
        },
        onAuthStateChanged: function(cb: any) {
            this.authStateChangedCallbacks.push(cb);
            return () => {
                this.authStateChangedCallbacks = this.authStateChangedCallbacks.filter((callback) => cb !== callback);
            }
        },
        signOut: async function() {
            setTimeout(() => this.authStateChangedCallbacks.forEach(cb => cb(null)), 0)
        },
        confirmPasswordReset: async function name(code: string, newPassword: string) {
            if (newPassword === 'weakPassword') {               
                throw new MockFirebaseError('auth/weak-password', '')
            }

            if (code === 'EXPIRED-CODE') {               
                throw new MockFirebaseError('auth/expired-action-code', '')
            }
            
            if (code === 'INVALID-CODE' || !code) {               
                throw new MockFirebaseError('auth/invalid-action-code', '')
            }

            if (code === 'DISABLED-USER-CODE') {               
                throw new MockFirebaseError('auth/user-disabled', '')
            }

            if (code === 'NOT-FOUND-USER-CODE') {               
                throw new MockFirebaseError('auth/user-not-found', '')
            }

            if (code === 'UNKNOWN_ERROR') {               
                throw new Error('unknown-error')
            }
        },
        sendPasswordResetEmail: async function(email: string, actionCodeSettings: any) {
            if (email === "valid@example.com") {              
                return;
            }

            if (email === 'notfound@example.com') {               
                throw new MockFirebaseError('auth/user-not-found', '')
            }

            if (email === 'invalid@example.com') {
                throw new MockFirebaseError('auth/invalid-email', '')
            }

            if (email === 'missing-continue-uri@example.com') {
                throw new MockFirebaseError('auth/missing-continue-uri', '')
            }

            if (email === 'invalid-continue-uri@example.com') {
                throw new MockFirebaseError('auth/invalid-continue-uri', '')
            }

            if (email === 'unauthorized-continue-uri@example.com') {
                throw new MockFirebaseError('auth/unauthorized-continue-uri', '')
            }

            throw new Error('unknown-error')
        }
    })
}

export default firebase;