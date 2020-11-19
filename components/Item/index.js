import React from 'react';

import { 
  Container, 
  Avatar, 
  Name, 
  Info, 
  TypeShop, 
  Rating,
  StarComponent,
  StarOffComponent,
  Location, 
  Street, 
  Neighborhood,
  ListItens,
  VetComponent,
  FoodComponent,
  TosaComponent
} from './styles';

function Item(dataItem) {
  return (
    <Container>
      <Avatar src={dataItem.data.avatarPath} />
      <Info>
        <Name>{dataItem.data.name}</Name>
        <TypeShop>@{dataItem.data.type}</TypeShop>
        <Rating>
          <StarComponent />
          <StarComponent />
          <StarComponent />
          <StarComponent />
          <StarOffComponent />
        </Rating>
        <Location>
          <Street>{dataItem.data.location.street}, {dataItem.data.location.number}</Street>
          <Neighborhood>{dataItem.data.location.neighborhood}</Neighborhood>
        </Location>
      </Info>
      
    </Container>
  );
}

export default Item;