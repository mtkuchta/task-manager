import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 360px;
  font-size: 4em;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.BLACK};
  padding: 0 5%;
  text-shadow: -5px 6px 8px ${({ theme }) => theme.colors.CADET};
  color: ${({ theme }) => theme.colors.GREEN};
  border-bottom: 2px solid ${({ theme }) => theme.colors.RED};
  padding-bottom: 5px;
  text-align: center;
`;
