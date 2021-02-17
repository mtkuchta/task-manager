import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;

  h1 {
    font-size: 50px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.BLACK};
    padding-left: 10%;
    text-shadow: -5px 6px 8px ${({ theme }) => theme.colors.CADET};
    color: ${({ theme }) => theme.colors.GREEN};
    border-bottom: 2px solid ${({ theme }) => theme.colors.RED};
    padding-bottom: 5px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Task Manager</h1>
    </StyledHeader>
  );
};

export default Header;
