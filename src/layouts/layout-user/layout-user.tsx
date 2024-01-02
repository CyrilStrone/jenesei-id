import { Outlet } from "react-router-dom";
import { LayoutOutletContainer, LayoutUserContainer, LayoutUserWrapper } from ".";
import { Header } from "@components/header";
import { MenuSideBar } from "@components/menu-sidebar";

export const LayoutUser: React.FC = () => {
  return (
    <LayoutUserWrapper>
      <Header />
      <LayoutUserContainer>
        <MenuSideBar />
        <LayoutOutletContainer>
          <Outlet />
        </LayoutOutletContainer>
      </LayoutUserContainer>
    </LayoutUserWrapper>
  );
};