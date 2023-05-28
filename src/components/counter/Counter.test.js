import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component Test',()=>{
    test('renders counter', () => {
        render(<Counter/>);
        const textElement = screen.getByText(/Counter/i);
        expect(textElement).toBeInTheDocument;
    });
});
