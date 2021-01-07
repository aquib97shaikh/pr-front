import React, { useEffect, useState } from 'react'

function Pool(props) {
    const [pool, setPool] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9999/pool",{
            headers:{
                "x-jtoken":localStorage.getItem("letsLearnJWT"),
            }
        }).then(r=>r.json()).then(r=>{
            setPool(r.pool);
        });
        
    }, [])


    return (
        <div>
            <h1>Pool</h1>
            {pool.map(r=><p>{JSON.stringify(r)}</p>)}
        </div>
    )
}

export default Pool
