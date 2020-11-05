import react from 'react';
import { createContext } from 'react';
const authContexte = createContext({

    auth:false,
    cookie:''
})

export default authContexte;