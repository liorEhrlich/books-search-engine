import styled from "@emotion/styled";

function App() {
  return <Wrapper>books search engine</Wrapper>;
}

export default App;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primaryBackground};
`;
