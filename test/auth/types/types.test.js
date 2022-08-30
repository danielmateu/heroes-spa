import { types } from "../../../src/auth/types/types"

describe('PRuebas sobre types.js', () => {  

    
    test('Debe de regresar estos types', () => { 

        console.log(types);
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });

    })
})