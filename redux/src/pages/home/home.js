import React from "react";
import { Container } from "react-bootstrap";
import Theme from "../../components/Theme";
import Content from "../../components/Content";
import Localization from "../../components/Localization";
import Counter from "../../components/Counter";

const HomePage = () => {
  const themaState = useSelector((state) => state.theme);
  const oppositeTheme = theme.value === "light" ? "dark" : "light";
  return (
    <Container
      fluid
      className={`bg-${theme.value} text-${oppositeTheme} h-100 p-3`}
    >
<Theme/>
<Content/>
<Localization/>
<Counter/>

    </Container>
  );
};

export default HomePage;
