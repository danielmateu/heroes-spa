import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import {MemoryRouter, Routes, Route} from 'react-router-dom'

describe('Pruebas sobre <PrivateRoute/>', () => { 

    test('Si estoy autenticado debe de mostrar el children', () => {

        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC123',
                name: 'Dani'
            }
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
                
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');


    })


    // test('Debe de navegar si está autenticado', () => { 

    //     const contextValue = {
    //         logged: true,
    //         user: {
    //             nae: 'Dani',
    //             id: 'ABC123'
    //         }
    //     }
        
    //     render(
    //         <AuthContext.Provider value={contextValue}>
    //             <MemoryRouter initialEntries={['/login']}>
    //                 <Routes>
    //                     <Route path='login' element={
    //                         <PublicRoute>
    //                             <h1>Ruta Pública</h1>
    //                         </PublicRoute>
    //                     }/>
    //                     <Route path='marvel' element = { <h1>Página Marvel</h1>}/>
    //                 </Routes>
    //             </MemoryRouter>
    //         </AuthContext.Provider>

    //     );

    //     screen.debug()

    //     expect(screen.getByText('Página Marvel')).toBeTruthy();
    // })
})