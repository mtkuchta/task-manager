import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  background-color: gray;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <div>Hello</div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
