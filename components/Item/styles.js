import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 166px;
  background: whitesmoke;
  border: 1.24px solid #999;
  border-radius: 18px;
  margin-bottom: 18px;

  display: flex;
  flex-direction: row;
  /* align-items: center; */
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
  justify-content: center;
`;

export const Name = styled.h3`
  font-size: 26px;
  font-weight: 600;

  margin-bottom: 18px;
`;

export const TypeShop = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: #AAA;
`;

export const Location = styled.div`
  display: flex;
  /* flex: 1; */
  width: 100%;
  flex-direction: column;

  justify-content: center;
  align-items: flex-end;

  padding: 8px 18px;
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