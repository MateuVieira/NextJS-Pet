import styled from 'styled-components';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

import Food from '../../asset/image/food.svg'
import Vet from '../../asset/image/vet.svg'
import Tosa from '../../asset/image/tosa.svg'

export const Container = styled.div`
  width: 80%;
  height: 166px;
  background: whitesmoke;
  border: 1.24px solid #999;
  border-radius: 18px;
  margin-bottom: 18px;

  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 166px;
  height: 166px;
  border-bottom-left-radius: 18px;
  border-top-left-radius: 18px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  padding: 8px 0;
  justify-content: space-around;
`;

export const Name = styled.h3`
  font-size: 26px;
  font-weight: 600;
`;

export const TypeShop = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: #AAA;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StarComponent = styled(AiFillStar)`
  width: 28px;
  height: 28px;
  color: gold;
`;

export const StarOffComponent = styled(AiOutlineStar)`
  width: 28px;
  height: 28px;
  color: gold;
`;

export const Location = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  justify-content: start;
  align-items: flex-start;
`;

export const Street = styled.h3`
  font-size: 20px;
  font-weight: 400;

  color: #333;
`;

export const Neighborhood = styled.h3`
  font-size: 18px;
  font-weight: 600;

  color: #333;
`;

export const ListItens = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: whitesmoke;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;

  justify-content: start;
  align-items: center;
`;

export const VetComponent = styled(Vet)`
  width: 236;
  height: 100%;
  transform: scale(0.8);

  &:hover {
    transform: scale(0.9)  
  }
`;

export const FoodComponent = styled(Food)`
  width: 241.516px;
  height: 235.515px;
  transform: scale(0.6);

  &:hover {
    transform: scale(0.7)  
  }
`;

export const TosaComponent = styled(Tosa)`
  width: 165px;
  height: 100%;
  transform: scale(0.6);

  &:hover {
    transform: scale(0.7)  
  }
`;