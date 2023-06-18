/**
 * 
  接收参数 envConf ，表示需要处理的环境变量配置信息。
  遍历 envConf 对象中的每个属性：
  用 realName 变量保存该属性值，并将其中的 "\\n" 转换为换行符。
  如果该属性名为 VITE_PORT，则将其值转换为 Number 类型。
  如果该属性名为 VITE_PROXY，则将其值转换为 JSON 格式的对象。如果转换失败，则输出错误信息。
  在返回对象 ret 中添加该属性名和其对应的值，并在当前进程的环境变量中添加该属性名和其对应的值。
  返回处理后的对象 ret。其中，ret 对象的属性名与输入的 envConf 对象相同，但属性值可能经过了类型转换。
  总的来说，该函数主要用处是对从环境变量中拿到的配置信息进行类型转换和处理，方便在项目代码中使用。
 */
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;

    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    if (envName === "VITE_PROXY") {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
        console.log(error);
      }
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}