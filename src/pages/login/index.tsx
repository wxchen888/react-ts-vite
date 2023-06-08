import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import styles from "./index.module.scss";
import { Input, Button } from "antd";
import React, { ChangeEvent } from "react";
import { useSelector, useDispatch, RootState } from "react-redux";

export default function Login() {
  const [userName, setUserName] = React.useState("admin");
  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const [password, setPassword] = React.useState("123456");
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const {
    username: usm,
    password: pwd,
    testArr: arr,
  } = useSelector((state: RootState) => ({
    username: state.login.username,
    password: state.login.password,
    testArr: state.home.testArr,
  }));
  const dispatch = useDispatch();
  const goLogin = () => {
    // 登录成功 异步dispatch数据存起来
    dispatch({
      type: "changeUserName",
      value: userName,
    });
    dispatch({
      type: "changePassword",
      value: password,
    });
    dispatch({
      type: "pushTestArr",
      value: Math.random().toString(),
    });
    console.log("登录", usm, pwd, arr);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginLeft}>
          <img src={loginLeft} alt="login~" />
        </div>
        <div className={styles.loginForm}>
          <div className={styles.loginLogo}>
            <img src={logo} alt="logo" className={styles.loginIcon} />
            <span className={styles.logoText}>Hooks-Admin</span>
          </div>
          {/* 表单部分 */}
          <div className={styles.loginFormBox}>
            <div className={styles.username}>
              <span>用户名：</span>
              <span>
                <Input
                  placeholder="admin"
                  value={userName}
                  onChange={onUserNameChange}
                />
              </span>
            </div>
            <div className={styles.password}>
              <span>密 码：</span>
              <span>
                <Input.Password
                  value={password}
                  onInput={onPasswordChange}
                  placeholder="123456"
                />
              </span>
            </div>
            <div className={styles.loginButton}>
              <Button type="primary" block onClick={goLogin}>
                登 录
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
