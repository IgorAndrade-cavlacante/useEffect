import { useState, useEffect } from "react"
import axios from "axios"



export function Exemplo2 () {
    const [cep, setCep] = useState("")

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((Response) => console.log(Response.data))
        }
    }, [cep])


    return (
        <section>
            <h2>Exemplo 2: Busca CEP</h2>

            <input type="number" placeholder="Digte seu CEP" onChange={(input) => setCep(input.target.value)}/>
        </section> 
    )
}