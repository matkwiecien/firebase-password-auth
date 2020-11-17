enum FirebaseErrors {
    NO_ERROR = 'NO_ERROR',
    INVALID_EMAIL = 'INVALID_EMAIL',
    ALREADY_IN_USE = 'ALREADY_IN_USE',
    WEEK_PASSWORD = 'WEEK_PASSWORD',
    NOT_ALLOWED = 'NOT_ALLOWED',
    WRONG_PASSWORD = 'WRONG_PASSWORD',
    NOT_FOUND = 'NOT_FOUND',
    DISABLED = 'DISABLED',
    INVALID_CODE = 'INVALID_CODE',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    MISSING_CONTINUE_URI = 'MISSING_CONTINUE_URI',
    INVALID_CONTINUE_URI = 'INVALID_CONTINUE_URI',
    UNAUTHORIZED_CONTINUE_URI = 'UNAUTHORIZED_CONTINUE_URI'
}

export const getErrorByFirebaseCode = (errorCode: string) : FirebaseErrors => {
    switch(errorCode) {
        case 'auth/email-already-in-use':
            return FirebaseErrors.ALREADY_IN_USE;            
        case 'auth/invalid-email':
            return FirebaseErrors.INVALID_EMAIL;    
        case 'auth/weak-password':
            return FirebaseErrors.WEEK_PASSWORD;            
        case 'auth/operation-not-allowed':
            return FirebaseErrors.NOT_ALLOWED;       
        case 'auth/wrong-password':
            return FirebaseErrors.WRONG_PASSWORD;    
        case 'auth/user-not-found':
            return FirebaseErrors.NOT_FOUND;
        case 'auth/user-disabled':
            return FirebaseErrors.DISABLED;
        case 'auth/invalid-action-code': 
        case 'auth/expired-action-code': {
            return FirebaseErrors.INVALID_CODE;
        }        
        case 'auth/missing-continue-uri': {
            return FirebaseErrors.MISSING_CONTINUE_URI;
        }
        case 'auth/invalid-continue-uri': {
            return FirebaseErrors.INVALID_CONTINUE_URI;
        }
        case 'auth/unauthorized-continue-uri': {
            return FirebaseErrors.UNAUTHORIZED_CONTINUE_URI
        }
        default:
            return FirebaseErrors.UNKNOWN_ERROR;
    }
}

export default FirebaseErrors;