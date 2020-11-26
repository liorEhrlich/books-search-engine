import styled from "@emotion/styled";

import Button from "./Button";

const CancelButton = styled(Button)`
  background-color: ${props => props.theme.colors.cancel};
  border-color: ${props => props.theme.colors.cancel};
  transition: background-color 0.5s ease, border-color 0.5s ease;

  :hover {
    background-color: ${props => props.theme.colors.cancelHover};
    border-color: ${props => props.theme.colors.cancelHover};
  }
`;

export default CancelButton;
