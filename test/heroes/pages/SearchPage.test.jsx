import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate 
}));


describe('Pruebas sobre Search Page', () => { 

    beforeEach(() => jest.clearAllMocks()); 

    test('Debe de mostrarse correctamente con valores por defecto', () => { 
        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        // screen.debug();

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        );

        // screen.debug();

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const image = screen.getByRole('img');
        expect(image.src).toContain('/assets/heroes/dc-batman.jpg')

        const alert = screen.getByLabelText('alert-primary');
        // console.log(alert);

        expect(alert.style.display).toBe('none');

    });

    test('Debe de mostrar un error si no se encuentra el Heroe', () => {  

        render(
            <MemoryRouter initialEntries={['/search?q=me%20cago%20en%20dios']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('');

    })

    test('Debe de llamar el navigate a la pantallanueva', () => {  
        

        const inputValue = 'superman'

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {name: 'searchText', value: inputValue}})

        console.log(input.value);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);

    })


})