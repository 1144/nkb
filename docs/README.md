# 函数功能概述

- [**cookie**](https://github.com/1144/nkb/blob/main/src/cookie.ts) Cookie 操作
- [**createObject**](https://github.com/1144/nkb/blob/main/src/createObject.ts) 根据keys数组创建纯对象，以数组元素为key，值为valueProducer处理的结果
- [**cut**](https://github.com/1144/nkb/blob/main/src/cut.ts) 把src字符串按target切段，忽略大小写，切段后返回的数组中包含匹配的字符串
- [**debounce**](https://github.com/1144/nkb/blob/main/src/debounce.ts) 简易的函数防抖
- [**encodeXssChar**](https://github.com/1144/nkb/blob/main/src/encodeXssChar.ts) 对可能引起XSS的字符进行编码
- [**events**](https://github.com/1144/nkb/blob/main/src/events.ts) 自定义事件，通过enable方法让一个对象或类支持事件功能后，它们将具有EventEmitter的方法
- [**formatDuration**](https://github.com/1144/nkb/blob/main/src/formatDuration.ts) 把时间长度转换成指定格式的时间，格式变量包括`DHISdhis`，大写则补齐两位
- [**formatStdDuration**](https://github.com/1144/nkb/blob/main/src/formatStdDuration.ts) 把时间长度转换成标准格式的时间，例如 1:23:45 或 01:23:45，一般用于音视频时长
- [**formatTime**](https://github.com/1144/nkb/blob/main/src/formatTime.ts) 把时间格式化成`2015-07-15 16:49:25`这样的字符串
- [**getClientIP**](https://github.com/1144/nkb/blob/main/src/getClientIP.ts) 获取客户端IP，需要在nginx配置里加上`proxy_set_header X-Real-Ip $remote_addr;`
- [**getDayZero**](https://github.com/1144/nkb/blob/main/src/getDayZero.ts) 获取某日0点0分0秒的时间戳，返回毫秒或秒
- [**getValidIds**](https://github.com/1144/nkb/blob/main/src/getValidIds.ts) 从id字符串中获取有效的id，返回数组。返回数组id顺序跟list顺序一致
- [**hideChars**](https://github.com/1144/nkb/blob/main/src/hideChars.ts) 隐藏指定范围内的字符
- [**kv**](https://github.com/1144/nkb/blob/main/src/kv.ts) 解析key-value字符串，或者将JS纯对象key-value化
- [**mapClick**](https://github.com/1144/nkb/blob/main/src/mapClick.ts) 点击事件代理，分发 click 点击事件
- [**mapIds**](https://github.com/1144/nkb/blob/main/src/mapIds.ts) 把英文逗号连接的 id 字符串，根据 titleMap 映射为对应的 title 字符串
- [**mbClip**](https://github.com/1144/nkb/blob/main/src/mbClip.ts) 截取指定长度的字符串，一个全角字符长度算2个单位
- [**mbLength**](https://github.com/1144/nkb/blob/main/src/mbLength.ts) 计算字符串长度，将unicode字符计算为2个单位
- [**md5**](https://github.com/1144/nkb/blob/main/src/md5.ts) 浏览器端MD5加密
- [**nodeMD5**](https://github.com/1144/nkb/blob/main/src/nodeMD5.ts) Node端MD5加密
- [**now**](https://github.com/1144/nkb/blob/main/src/now.ts) 获取单位为秒的当前时间
- [**removeAll**](https://github.com/1144/nkb/blob/main/src/removeAll.ts) 从数组中删除所有符合条件的元素，返回被删除的元素组成的数组，没有符合条件的元素时返回空数组
- [**removeOne**](https://github.com/1144/nkb/blob/main/src/removeOne.ts) 从数组中删除一个元素，返回被删除的元素，找不到时返回`undefined`
- [**smartTime**](https://github.com/1144/nkb/blob/main/src/smartTime.ts) 智能格式化时间，格式化为 08:30 这样的字符串，非数字字符会被忽略
- [**splitValues**](https://github.com/1144/nkb/blob/main/src/splitValues.ts) 拆分由指定字符隔开的多个值
- [**throttle**](https://github.com/1144/nkb/blob/main/src/throttle.ts) 简易的函数节流
- [**toJSON**](https://github.com/1144/nkb/blob/main/src/toJSON.ts) 把JSON数组转换为一个JSON对象
- [**Type.isPlainObject**](https://github.com/1144/nkb/blob/main/src/type.ts) 判断一个值是否是纯 JavaScript 对象
- [**unique**](https://github.com/1144/nkb/blob/main/src/unique.ts) 删除数组里的重复元素，或者将json数组里的每个json对象根据指定属性排重
- [**uniqueMerge**](https://github.com/1144/nkb/blob/main/src/uniqueMerge.ts) 按顺序合并两个数组（元素为非引用类型），遇到重复元素则删除前面的元素
- [**uniquePush**](https://github.com/1144/nkb/blob/main/src/uniquePush.ts) 将一个值添加到数组末尾，并删除数组里之前已有的与之相等的元素
- [**uniqueUnshift**](https://github.com/1144/nkb/blob/main/src/uniqueUnshift.ts) 将一个值添加到数组头部，并删除数组里之前已有的与之相等的元素
- [**updateOne**](https://github.com/1144/nkb/blob/main/src/updateOne.ts) 更新列表中的某一条数据，成功则返回`true`，找不到目标数据则返回`false`

*详细文档请在调用函数时查看 IDE 提示（包含参数列表、参数类型、参数描述、调用示例等），或直接查看函数源码（有详细注释）。*
