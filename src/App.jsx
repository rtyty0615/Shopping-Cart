import styled from "styled-components";
import { Link } from "react-router";

const HomeContainer = styled.div`
  margin: 2rem auto;
  padding: 2rem;

  h1 {
    font-size: 1.8rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }

  a {
    color: #a15814;
    text-decoration: none;
    font-size: 2rem;
    margin: 0 1em;
    padding: 0.25em 1em;

    &:hover {
      opacity: 0.8;
    }
  }
`;

function App() {
  return (
    <HomeContainer>
      <h1>Hello from home page!</h1>
      <p>So, how are you?</p>
      <Link to="shop">Shop Now</Link>
    </HomeContainer>
  );
}

export default App;
