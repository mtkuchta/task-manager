import styled from 'styled-components';

import AppLogo from '../components/AppLogo/AppLogo';

const StyledHeader = styled.header`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <AppLogo />
    </StyledHeader>
  );
};

export default Header;
