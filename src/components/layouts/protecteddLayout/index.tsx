import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import {
  removeAuthUser
} from "../../../store/slices/AuthUserSlice";
import Cookies from "../../../utils/cookies";
import {
  LayoutContentWrap,
  LayoutTopMenuWrap,
  LayoutWrap,
} from "../layoutStyles";
import TopMenu from "../top-menu";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRemoveUser = () => {
    dispatch(removeAuthUser());
    // Redirect to login if token is not present or expired
    navigate("/login");
  };

  useEffect(() => {
    // Check if token exists and is not expired
    const token = Cookies.getCookieWithExpiry("token");

    if (!token) {
      console.log(`🚀 ~ file: index.tsx:21 ~ useEffect ~ token:`, token);
      handleRemoveUser();
    }
  }, [navigate]);

  return (
    <LayoutWrap>
      <LayoutTopMenuWrap>
        <TopMenu />
      </LayoutTopMenuWrap>
      <LayoutContentWrap>
        <Outlet />
      </LayoutContentWrap>
    </LayoutWrap>
  );
};

export default ProtectedLayout;
