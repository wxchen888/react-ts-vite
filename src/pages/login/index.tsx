import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import styles from "./index.module.scss";
import { Input, Button, message } from "antd";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
// 使用redux-thunk
// import { asyncActions } from "@/store/modules/home";
// 引入axios
import { login } from "@/api/login";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = React.useState("admin");
  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const [password, setPassword] = React.useState("123456");
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigateTo = useNavigate();
  const dispatch = useDispatch<any>();
  const goLogin = () => {
    if (!userName.trim() || !password.trim()) {
      message.warning("请输入用户名和密码！");
      return;
    }
    // 登录成功 异步dispatch数据存起来
    login({
      username: userName.trim(),
      password: password.trim(),
    })
      .then((res) => {
        dispatch({
          type: "loginIn",
          value: {
            token: res.data.token,
            username: res.data.userInfo.username,
            password: res.data.userInfo.password,
            nickname: res.data.userInfo.nickname,
          },
        });
        message.success("登录成功");
        navigateTo("/home");
      })
      .catch((err) => {
        message.open({
          type: "error",
          content: `登录失败：${err}`,
        });
      });
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
