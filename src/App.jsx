import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
    `};
`;
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: #baba7a;
`;
function App() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button $primary>Primary Button</Button>
    </Container>
  );
}

export default App;
