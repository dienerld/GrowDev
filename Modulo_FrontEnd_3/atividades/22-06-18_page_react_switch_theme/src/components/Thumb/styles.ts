import styled from 'styled-components';

export const ContainerThumb = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 100%;
  gap:8px;
  min-width: 200px;
  min-height: 200px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background.tertiary};


  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.secondary}
  }

  @media (max-width: 600px) {
    width: 100%;
    min-width: 100%;
    min-height: auto;
    height: auto;
    padding: 8px;
    margin-bottom: 8px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
