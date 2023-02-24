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
    <div>

       <ItemList listaProductos={listaProductos} />
    </div>
 );
};

export default ItemListContainer;