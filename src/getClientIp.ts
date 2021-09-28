//@ts-nocheck

/**-
  获取客户端IP，需要在nginx配置里加上`proxy_set_header X-Real-Ip $remote_addr;`
  -p req 原生 request 对象
*/
export default function getClientIp(req) {
  return req.headers['x-real-ip'] ||
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
}
