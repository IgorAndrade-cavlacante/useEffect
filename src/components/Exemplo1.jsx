import {useEffect, useState} from "react"


export function Exemplo1 () {

const [numero, setNumero] = useState(0)

    useEffect(() => {
        alert("A paginas carregou!")
    }, [numero])

    return(
        <section>
            <h2>Exemplo 1</h2>

            <p>numero: {numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
        </section>
    )
}