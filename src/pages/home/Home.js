import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListaProdutos from '../components/ListaProdutos'

export default function Home() {

    const [produtos, setProdutos] = useState([])
    

    useEffect(() => {
        axios.get(`http://localhost:3001/produtos/`)
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((error) => {
                console.log("Ops! Ocorreu um erro: " + error.message)
            })


    }, [])

    return (
        <>
            <h1>Home</h1>
            <ListaProdutos produtos={produtos} />
        </>
    )
}
