import React from 'react';

const IonButtonMock: React.FC<any> = ({children, type='button', ...props}) => {
    return <button type={type} {...props}>{children}</button>
}

export default IonButtonMock;