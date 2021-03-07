import styled from 'styled-components';

export const Container = styled.div`
  width: 95vh;
  height: 95vh;
  display: grid;
  grid-template-columns: 10% 45% 45%;
  grid-template-rows: 10% 45% 45%;
  grid-template-areas:
    'empty urgent not_urgent'
    'important important-urgent important-not_urgent'
    'not_important not_important-urgent not_important-not_urgent';
`;
