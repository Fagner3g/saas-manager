import React from "react";

import SidebarModules from "./sidebar-modules";

import Main from "./main";
import Page from "./page";

const WebsiteBuilder = () => {
  return (
    <Page>
      <Main />
      <SidebarModules />
    </Page>
  );
};

export default WebsiteBuilder;
