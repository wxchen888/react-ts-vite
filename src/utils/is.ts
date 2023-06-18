const toString = Object.prototype.toString;

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * 是否为函数
 */
export const isFunction = (val: unknown) => {
  return is(val, 'Function')
}