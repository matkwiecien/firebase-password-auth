// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import mockIonLoading from 'mocks/ionic/IonLoadingMock'
import mockFirebase from 'Firebase/mocks/firebase'

jest.mock('firebase/app', () => mockFirebase)

jest.mock('@ionic/react', () => {
    const rest = jest.requireActual('@ionic/react');
    return {
        ...rest,
        IonLoading: mockIonLoading,
    }
})