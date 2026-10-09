import { describe, expect, test } from "vitest";
import { MyCounterApp } from '../../../src/counter/compoents/MyCounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe("MyCounterApp",()=>{
    test("should render the component ",()=>{
        render(<MyCounterApp/>);
        //screen.debug()
        expect(
            screen.getByRole('heading',{level:1}).innerHTML
        ).toContain('counter: 10');

        expect(screen.getByRole('button', {name: '+1'})).toBeDefined();
        expect(screen.getByRole('button', {name: '-1'})).toBeDefined();
        expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined();
    });

    test('should increment the counter',()=>{
        render( <MyCounterApp/>);

        const labelH1 = screen.getByRole('heading', {level:1});
        const button = screen.getByRole('button', {name:'+1'});
        
        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain('counter: 11')
    })

    test('should decrement the counter',()=>{
        render( <MyCounterApp/>);

        const labelH1 = screen.getByRole('heading', {level:1});
        const button = screen.getByRole('button', {name:'-1'});
        
        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain('counter: 9')
    })
});