import styled from "@emotion/styled";
import AcceptButton from "./common/AcceptButton";
import CancelButton from "./common/CancelButton";

const App = () => (
  <Wrapper>
    <ButtonsContainer>
      <AcceptButton>Accept</AcceptButton>

      <CancelButton>Cancel</CancelButton>
    </ButtonsContainer>
  </Wrapper>
);

export default App;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primaryBackground};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
