import {useState} from 'react'
const useFormulario = (inicial) => {
    const [formulario, setFromulario] = useState(inicial)
    const handleChange = (e) => {
        setFromulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }
    const reset = () =>{
        setFromulario(inicial)
    }
    return [formulario, handleChange,reset]
}
export default useFormulario