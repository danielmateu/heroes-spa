import { render,screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"
import {MemoryRouter, Routes, Route} from 'react-router-dom'

describe('Pruebas sobre <AppRouter/>', () => {

    test('Debe de mostrar el login si no está autenticado', () => {  

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();

        expect(screen.getAllByText('Login').length).toBe(2);

    });

    test('Debe de mostrar el componente Marvel si está autenticado', () => { 

        const contextValue = {
            logged: true,

            user: {
                id: 'ABC123',
                name: 'Dani'
            }
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
    })
})