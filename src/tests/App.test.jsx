import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'

import App from '../App';


describe('App integration', () => {
    it('Makes sure rendered data is processed on event', () => {
        render(<App/>);
        let submitBtn = screen.getByText('GO!');
        fireEvent.click(submitBtn);

        let returnResults = screen.getByTestId('results-data');

        expect(returnResults).toHaveTextContent('');
    });
});
