import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/Data';

const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState([]);
  
  useEffect(() => {
    getProducts()
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error))
  }, []);


  return (
    <>
       <ItemList listaProductos={listaProductos} />
    </>
 );
};

export default ItemListContainer;