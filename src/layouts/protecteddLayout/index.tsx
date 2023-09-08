import { Outlet } from "react-router-dom";
import { LayoutContentWrap, LayoutTopMenuWrap, LayoutWrap } from "../layoutStyles";

const ProtectedLayout = () => {
  return (
    <LayoutWrap>
      <LayoutTopMenuWrap> Import here</LayoutTopMenuWrap>
      <LayoutContentWrap>
        <Outlet />
      </LayoutContentWrap>
    </LayoutWrap>
  );
};

export default ProtectedLayout;


