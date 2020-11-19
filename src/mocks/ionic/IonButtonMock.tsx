import React from 'react';

const IonButtonMock: React.FC<any> = ({children, ...props}) => {
    return <button {...props}>{children}</button>
}

export default IonButtonMock;