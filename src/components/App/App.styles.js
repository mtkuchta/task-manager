import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: linear-gradient(to top right, ${({ theme }) => theme.colors.CADET}, transparent);
`;

export const Main = styled.main`
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Aside = styled.aside`
  width: 30%;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
`;
