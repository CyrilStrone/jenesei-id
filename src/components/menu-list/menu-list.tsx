import { useTranslation } from "react-i18next";
import { MenuListProps, MenuListWrapper } from ".";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import { IUserRout, UserRouts } from "@core/router";
import { MenuItem } from "@components/menu-item";
import { useGoToLink } from "@hooks/index";

export const MenuList: FC<MenuListProps> = () => {
  const { t } = useTranslation("pages");
  const goToLink = useGoToLink();
  const location = useLocation();

  return (
    <MenuListWrapper>
      {UserRouts.map((route: IUserRout) => (
        <MenuItem
          key={route.key}
          onClick={() => goToLink(route.to)}
          icon={route.icon}
          title={t(route.title)}
          description={t(route.description)}
          checked={route.to == location.pathname}
        />
      ))}
    </MenuListWrapper>
  );
};