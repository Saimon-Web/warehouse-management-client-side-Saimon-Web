import { useEffect, useState } from "react";

const useInventory =()=> {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        fetch(` https://shielded-brook-58570.herokuapp.com/inventory`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return [inventory,setInventory];
}
export default useInventory;