import styled from 'styled-components';

export const ContainerBadRequest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  /* margin-top: -60px; */

  overflow-x: hidden;
  overflow-y: hidden;

  text-align: center;

  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};

  img{
    position: relative;
    height: 100%;
    width: 70%;
    right: -5%;
  }

  h1{
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    left: 5%;
  }

  @media (max-height: 600px) {
    height: 80%;
  }

  @media (max-width: 600px) {

    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
      left: 0;
      font-size: 2rem;
    }

    img{
      width: 100%;
      height: auto;
      right: 0;

      margin-bottom: 20px;
    }
  }

`;
