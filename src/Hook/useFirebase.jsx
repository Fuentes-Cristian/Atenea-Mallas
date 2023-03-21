import { useState } from 'react'
import {db} from '../firebase/Index'
import { collection,  getDoc} from 'firebase/firestore'

const useFirebase = () => {

const [productos, setProductos] = useState([])

const getProductos = async () =>{
    try {
        const itemColl = collection(productos, db)

         await getDoc(itemColl).then((snapshot) =>{
            if (snapshot.size === 0) {
                console.log("base de datos vacia");
            }else
            setProductos(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
        })
    } catch (error) {
        console.log("error al guardar")
    }
}


  return {productos, getProductos}
}

export default useFirebase