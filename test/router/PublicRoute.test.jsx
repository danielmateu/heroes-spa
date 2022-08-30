import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"
import {MemoryRouter, Routes, Route} from 'react-router-dom'

describe('Pruebas sobre <PublicRoute/>', () => { 

    test('Si no estoy autenticado debe de mostrar el children', () => {
        
        const contextValue = {
            logged: false
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.getByText('Ruta Pública')).toBeTruthy();



    })


    test('Debe de navegar si está autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
                nae: 'Dani',
                id: 'ABC123'
            }
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element = { <h1>Página Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>

        );

        screen.debug()

        expect(screen.getByText('Página Marvel')).toBeTruthy();
    })
})