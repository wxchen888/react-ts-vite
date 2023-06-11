import { Switch } from "antd";
import { useState } from "react";

const SwitchDark = () => {
  const [darkMode, setDarkMode] = useState(false);
  const onChange = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <Switch
      className="dark"
      defaultChecked={darkMode}
      checkedChildren={<>🌞</>}
      unCheckedChildren={<>🌙</>}
      onChange={onChange}
    />
  );
};

export default SwitchDark;
