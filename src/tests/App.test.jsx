import { render, screen, fireEvent } from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import App from '../App';
import '@testing-library/jest-dom';
 

const server = setupServer(
  rest.get('/testGet', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        {name: 'Jacob', age: 21},
        {name: 'tester', age: 1}
      ],
  }));
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App Component', () => {
  test('renders learn react link', async () => {
    render(<App />);
  
    const input = screen.getByTestId('form-input');
    const button = screen.getByText('GO!');
  
    fireEvent.change(input, {target: {value: '/testGet'}})
    fireEvent.click(button);
    
    const pre = await screen.findByTestId('results-data');
    expect(pre).toHaveTextContent('Jacob');
  });
});