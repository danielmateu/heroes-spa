import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('PRuebas sobre authReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({logged: false},{});
        
        expect(state).toEqual({
            logged: false,
        });

    });

    test('Login debe autenticar y establecer el user', () => { 

        const action = { 
            
            type: types.login,
            payload: {
                name: 'Dani',
                id: '123'
            }
        }

        const state = authReducer({logged:false},action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    });

    test('Logout debe de borrar el nombre del usuario y establecer logged en false', () => { 

        const state = {
            logged: true,
            user: {id:'123',name:'Dani'}
        };

        const action = { type: types.logout };

        const newState = authReducer(state,action);

        expect(newState).toEqual({
            logged: false,
        })
    });


})