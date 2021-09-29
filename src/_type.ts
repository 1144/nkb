/**
 * 定义常用类型
 */

/** JSON 对象 */
export type JSON = {
  [key: string]: any
}

/** 判断函数 */
export type Predicate = (value: any, index: number, obj: any[]) => boolean
