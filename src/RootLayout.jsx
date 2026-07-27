import { Outlet } from "react-router";
import GlobalStyles from "./GlobalStyles";
import Container from "./Container";
import { Navigation } from "./Nav";

export default function RootLayout() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navigation />
      </Container>
      <Outlet />
    </>
  );
}
