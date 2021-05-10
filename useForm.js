import { useState } from "react"

export const useForm = (initialState = {}) => {   //sirve para leer valoreas de los input
    const [values, setValues] = useState(initialState);

    const reset = () => {  //por si se quiere reiniciar el campo de texto
        setValues(initialState);
    }

    const handleInputChange = ({target}) =>{  //se desestructura el target para no tener que llamar siempre el evento (e.target....)
        setValues({
            ...values,   //para que no se pierdan los otros datos
            [target.name]: target.value  //target apunta al evento name es el elemento que cambió y el value obtiene el valor del input
        })
    }

    return[values, handleInputChange, reset];
}
