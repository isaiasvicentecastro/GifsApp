import {describe, expect, test} from 'vitest'
import {CustomHeader} from '../../../src/shared/components/CustomHeader'
import {render, screen} from '@testing-library/react'



describe("CustomHeader",()=>{

    const title = 'Test Title'
    const description = 'Test description'
    
    test("shoul render the title correctly", ()=>{

        /* Entonces todo junto: "Renderiza CustomHeader con este título y verifica que 
                                 ese título aparezca en pantalla." */

       render(<CustomHeader title={title} />)
       /* 
           expect(): Es lo que esperas obtener de una prueba
           screen.getByText(title):  "Busca en la pantalla un elemento que tenga este texto."
          .toBeDefined(): "Espero que lo que encontré exista/esté definido."
          */
       expect(screen.getByText(title)).toBeDefined();
       /* Sirve para ver el html de lo que estamos haciendo */
       //screen.debug()
    })

    test("should render the description when provided", ()=>{

        
        
       render(<CustomHeader title={title} description={description} />)
       expect(screen.getByText(title)).toBeDefined();
       /* paragraph: significa párrafo */
       expect(screen.getByRole('paragraph')).toBeDefined()
       /* screen.getByRole('paragraph'): Busca este párrafo 
          .innerHTML: optén lo que hay dentro*/
       expect(screen.getByRole('paragraph').innerHTML).toBe(description)
       //screen.debug()
    })

    test("should not render description when not provided", ()=>{
        /* render(): dibuja el componente en el DOM de prueba. */
       const {container} = render(<CustomHeader title={title} />)

       /* Busca cualquier elemento que tenga la clase  '.content-center'
          en este caso es un <div> */
       const divElement = container.querySelector('.content-center');

       /* Busca el <h1> dentro de ese <div>  
          "?.":  significa "Si divElement existe, busca el <h1> dentro de él. 
                 Si no existe, no hagas nada y devuelve undefined."*/
       const h1  = divElement?.querySelector('h1')

       /* "Si h1 existe, dame su innerHTML; si no existe, devuelve undefined."
           
           toBe(): solo sirve para comprar con el expect*/
           
       expect(h1?.innerHTML).toBe(title)

       const p = divElement?.querySelector('p')
       /* Si no existe espero que "p" seas nulo */
       expect(p).toBeNull();
       screen.debug()
    })
})