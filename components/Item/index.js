import React from 'react';

import { 
  Container, 
  Avatar, 
  Name, 
  Info, 
  TypeShop, 
  Location, 
  Street, 
  Neighborhood,
} from './styles';

function Item(dataItem) {
  return (
    <Container>
      <Avatar src={dataItem.data.avatarPath} />
      <Info>
        <Name>{dataItem.data.name}</Name>
        <TypeShop>@{dataItem.data.type}</TypeShop>
      </Info>
      <Location>
        <Street>{dataItem.data.location.street}, {dataItem.data.location.number}</Street>
        <Neighborhood>{dataItem.data.location.neighborhood}</Neighborhood>
      </Location>
    </Container>
  );
}

export default Item;