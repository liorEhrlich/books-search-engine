import styled from "@emotion/styled";

import Button from "./Button";

const AcceptButton = styled(Button)`
  background-color: ${props => props.theme.colors.accept};
  border-color: ${props => props.theme.colors.accept};
  transition: background-color 0.5s ease, border-color 0.5s ease;

  :hover {
    background-color: ${props => props.theme.colors.acceptHover};
    border-color: ${props => props.theme.colors.acceptHover};
  }
`;

export default AcceptButton;
