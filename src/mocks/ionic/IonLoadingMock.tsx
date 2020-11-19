import React from 'react';

const IonLoadingMock: React.FC<any> = ({...props}) => {
    return props.isOpen ? <div>loading</div> : null;
}

export default IonLoadingMock;