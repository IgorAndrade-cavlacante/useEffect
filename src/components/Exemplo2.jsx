import { useState, useEffect } from "react"
import axios from "axios"



export function Exemplo2 () {
    const [cep, setCep] = useState("")
    const [logradouro,setLogradouro] = useState("")
    const [bairro,setBairro] = useState("")
    const [cidade,setCidade] = useState("")
    const [estado,setEstado] = useState("")
    const [uf,setUf] = useState("")

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((Response) => {
                setLogradouro(Response.data.logradouro)
                setBairro(Response.data.bairro)
                setCidade(Response.data.localidade)
                setEstado(Response.data.estado)
                setUf(Response.data.uf)
            })
        }
    }, [cep])


    return (
        <section>
            <h2>Exemplo 2: Busca CEP</h2>

            <input type="number" placeholder="Digte seu CEP" onChange={(input) => setCep(input.target.value)}/>

            {cep.length === 8 && (
                <>
                <h3>Suas informacoes</h3>
                <ul>
                    <li>Rua: {logradouro}</li>
                    <li>Bairro: {bairro}</li>
                    <li>Cidade: {cidade}</li>
                    <li>Estado: {estado} - {uf}</li>
                </ul>
                </>
            )}

            <form action="">
                <div>
                    <label htmlFor="">Rua:</label>
                    <input type="text" value={logradouro}/>
                </div>

                <div>
                    <label htmlFor="">Bairro:</label>
                    <input type="text" value={bairro}/>
                </div>

                <div>
                    <label htmlFor="">Cidade:</label>
                    <input type="text" value={cidade}/>
                </div>

                <div>
                    <label htmlFor="">Estado:</label>
                    <input type="text" value={estado}/>
                </div>

                <div>
                    <label htmlFor="">UF:</label>
                    <input type="text" value={uf}/>
                </div>
            </form>
        </section> 
    )
}