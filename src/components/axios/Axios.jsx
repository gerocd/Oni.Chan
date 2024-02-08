import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {

    const [lista, setLista] = useState([])

    const GetList = () => {
        axios.get("https://rickandmortyapi.com/api/character").then((value) => {
            setLista(value.data.results)

    });
};

    useEffect(() =>{
        GetList();
    })

    return (
        <div>
            <ul>
                {lista.map( (item) => {return <li key={item.id}> {item.name}</li>})}
            </ul>
        </div>
    );
}

export default Axios;