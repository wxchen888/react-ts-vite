import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import styles from "./index.module.scss";
import { Input, Button } from "antd";
import React from "react";

export default function Login() {
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
                <Input placeholder="admin" />
              </span>
            </div>
            <div className={styles.password}>
              <span>密 码：</span>
              <span>
                <Input.Password placeholder="123456" />
              </span>
            </div>
            <div className={styles.loginButton}>
              <Button type="primary" block>
                登 录
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
