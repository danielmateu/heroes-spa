import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/Navbar";
import { Router, MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth/context/AuthContext";


const mockUseNavigatte = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigatte 
}));


describe('PRuebas sobre NavBar', () => {

    const contextValue = {
        loggedIn: true,
        user: { id: 'ABC123', name: 'Dani' },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario Logueado', () => {
        render(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>

        );

        //screen.debug();
        expect(screen.getByText('Dani')).toBeTruthy();
    });

    test('Debe de llamar el logout y navigate cuando se hace click en el botón', () => {
        render(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>

        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigatte).toHaveBeenCalledWith('/login',{
            replace: true
        });
    });


})