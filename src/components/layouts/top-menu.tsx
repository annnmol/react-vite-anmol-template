import { Button } from "antd";
import { LogOut } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  authUserStore,
  removeAuthUser,
} from "../../store/slices/AuthUserSlice";

const TopMenu = () => {
  const dispatch = useAppDispatch();
  const { authUser } = useAppSelector(authUserStore);

  const handleRemoveUser = () => {
    dispatch(removeAuthUser());
  };
  return (
    <>
      LOGO
      <div className="topMenuRightSide">
        {authUser?.username}
        <Button
          onClick={handleRemoveUser}
          type="text"
          danger
          icon={<LogOut color="red" size={24} />}
        />
      </div>
    </>
  );
};

export default TopMenu;
