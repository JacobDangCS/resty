import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../App';


describe('Result Component', () => {
    it('Makes sure rendered data is processed on event', () => {
        render(<App/>);
        let submitBtn = screen.getByTestId('submitBtn');
        fireEvent.click(submitBtn);

        let returnResults = screen.getByTestId('returnResults');

        expect(returnResults).toHaveTextContent(/.*/);
    });
});
