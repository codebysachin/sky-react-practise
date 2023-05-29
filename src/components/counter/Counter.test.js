import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component Test',()=>{
    test('renders couter, increment, decrement, reset button', () => {
        // ACT
        render(<Counter/>);
        const counterText = screen.getByText('Counter: 0')
        const incrementButton = screen.getByText('Increment');
        const decrementButton = screen.getByText('Decrement');
        const resetButton = screen.getByText('Reset');

        expect(counterText).toBeInTheDocument();
        expect(incrementButton).toBeInTheDocument();
        expect(decrementButton).toBeInTheDocument();
        expect(resetButton).toBeInTheDocument();
    });

    test('counter increment, decrement and reset correctly', () => {
        render(<Counter/>);
        const incrementButton = screen.getByText('Increment');
        const decrementButton = screen.getByText('Decrement');
        const resetButton = screen.getByText('Reset');

        expect(screen.getByText('Counter: 0')).toBeInTheDocument();
        
        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 1')).toBeInTheDocument();

        fireEvent.click(decrementButton);
        expect(screen.getByText('Counter: 0')).toBeInTheDocument();

        fireEvent.click(decrementButton);
        expect(screen.getByText('Counter: -1')).toBeInTheDocument();

        fireEvent.click(resetButton);
        expect(screen.getByText('Counter: 0')).toBeInTheDocument();
        
    });
});
