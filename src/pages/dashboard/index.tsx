import * as React from "react";
import AppButton from "../../components/buttons";
import { useAppDispatch, useAppSelector } from "../../store";
import { authUserStore } from "../../store/slices/AuthUserSlice";
import { StyledDashboardPageWrapper } from "./styles";

import { ApiNetworkService } from "../../network/apiNetworkService";

import { Avatar, List } from "antd";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { authUser } = useAppSelector(authUserStore);
  const [count, setCount] = React.useState(0);

  const [githubUsers, setGithubUsers] = React.useState([]);

  React.useEffect(() => {}, []);

  const getGithubUsers = () => {
    ApiNetworkService.getGithubUsers()
      .then((res) => {
        console.log(" ApiNetworkService.getGithubUsers", res);
        setGithubUsers(res.data ?? []);
      })
      .catch((err) => {
        console.error(" ApiNetworkService.getGithubUsers", err);
      })
      .finally(() => {});
  };

  return (
    <StyledDashboardPageWrapper>
       <Link to={"/about"}>Go to About Page</Link>
      <h1>Dashboard</h1>
      {githubUsers.length > 0 ? (
        <h2>There are {githubUsers.length} github users</h2>
      ) : (
        <AppButton fontSize={12} onClick={() => getGithubUsers()}>
          Get Github Users
        </AppButton>
      )}

      <List
        itemLayout="horizontal"
        dataSource={githubUsers ?? []}
        renderItem={(user: any) => (
          <List.Item key={user?.id}>
            <List.Item.Meta
              avatar={<Avatar src={user?.avatar_url} />}
              title={<a href={user?.url}>{user.login}</a>}
              description={user?.url}
            />
          </List.Item>
        )}
      />
    </StyledDashboardPageWrapper>
  );
};

export default Dashboard;
