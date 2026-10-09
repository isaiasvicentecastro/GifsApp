import { describe, expect, test } from 'vitest'
import {useMyCounterApp} from '../../../src/counter/hook/useMyCounterApp'
import {act, renderHook } from '@testing-library/react'

describe('useMyCounterApp',()=>{
    

    
    test('should initialize with defauld value of 10',()=>{
        
        const {result} = renderHook(()=> useMyCounterApp());
        expect(result.current.counter).toBe(10)      
    });

    test('should initialize with defauld value of 20',()=>{

        const initialNumber = 20;

        const {result} = renderHook(()=> useMyCounterApp({initialNumber}));
        expect(result.current.counter).toBe(initialNumber)      
    })

    test('should initialize with defauld value of 20',()=>{

        const {result} = renderHook(()=> useMyCounterApp());
        
        /* funcion act(()=>{}): se usa cuando hay un codigo de cambio de estado
                                en este caso cuando presionamos un botón cambia 
                                de estado */
        act(()=>{
            result.current.handleAdd()
        })

        expect(result.current.counter).toBe(11)
    })

    test('should decrement counter when handleSubtract is called',()=>{

        const {result} = renderHook(()=> useMyCounterApp());

        act(()=>{
            result.current.handleSubtract()
        })

        expect(result.current.counter).toBe(9)
    })

    test('should reset to initialNumber the counter when handleReset is called',()=>{

        const {result} = renderHook(()=> useMyCounterApp());

        act(()=>{
            result.current.handleSubtract()
            result.current.handleSubtract()
            result.current.handleSubtract()
            result.current.handleSubtract()
            result.current.handleSubtract()
        })

        expect(result.current.counter).toBe(5);

        act(()=>{
            result.current.handleReset();
        })

        expect(result.current.counter).toBe(10)
    })



})