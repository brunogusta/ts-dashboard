import React from "react";
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";
import Footer from "../Footer";

import { GridTemplate } from "./styles";

const Layout = () => {
  return (
    <GridTemplate>
      <Aside />
      <MainHeader />
      <Content />
      <Footer />
    </GridTemplate>
  );
};

export default Layout;
