import styled from 'styled-components';

export const ContainerHome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 768px) {
    flex-wrap: wrap;
  }
  `;

export const WrapperThumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 30%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};


  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const WrapperCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8px;

  text-align: left;


  @media(max-width: 600px) {
    flex-direction: column;
  }
`;
