// import "./index.scss"; //此种引入属于全局引入，会导致其他组件样式被覆盖

// 模块化引入 类似于vue的scoped
import styles from "./index.module.scss";

const Test = () => {
  return <div className={styles.box}>Test1</div>;
};

export default Test;
