import { Button, Card, Checkbox, Form, Input } from "antd";
import { useAppDispatch } from "../../../store";
import { setAuthUser } from "../../../store/slices/AuthUserSlice";
import { StyledFullPageContainer } from "./login-page-styles";

const INTIAL_VALUES = {
  username: "anmol",
  password: "123456",
  remember: true,
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(setAuthUser(values));
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <StyledFullPageContainer>
      <Card title="Sign in" bordered={false} style={{ width: 350 }}>
        <Form
          name="login"
          layout="vertical"
          style={{ maxWidth: 600 }}
          initialValues={INTIAL_VALUES}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </StyledFullPageContainer>
  );
};

export default LoginPage;
