import React, {useState} from "react";

import Search from "../Search";
import Item from "../Item";

import { Container, ItemList } from "./styles";

// import Vet1 from '../../asset/image/vet1.jpg'
// import Vet2 from '../../asset/image/vet2.jpg'
// import Loja1 from '../../asset/image/loja1.jpg'
// import Loja2 from '../../asset/image/loja2.jpg'
// import Loja3 from '../../asset/image/loja3.png'

function Body() {
  const [dataItens, setDataItens] = useState([
    {
      "id": 1,
      "name": 'Loja',
      "type": 'Petshop',
      "avatarPath": 'https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/Como-ter-uma-gestao-de-estoque-incrivel-na-minha-pet-shop.jpg',
      "location": {
        "street": 'Rua Alguma coisa',
        "neighborhood": 'Pq. 3 Marias',
        "number": 'xxxx',
      }
    }
  ])

  return (
    <Container>
      <Search />
      <ItemList>
        <Item data={dataItens[0]} />
        <Item data={dataItens[0]} />
        <Item data={dataItens[0]} />
        <Item data={dataItens[0]} />
        <Item data={dataItens[0]} />
        <Item data={dataItens[0]} />
      </ItemList>
    </Container>
  );
}

export default Body;
