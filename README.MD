## 开发坏境启动

1. `npm install`
2. `npm start`
3. 浏览器打开[http://localhost:8080](http://localhost:8080)
4. 兼容ie8 注释掉redux-logger
5. cheap-module-eval-source-map  eval不兼容ie8

备注：如果要在局域网访问，请修改`package.json`-`start`命令，增加`--public 192.168.x.x`，后面为你的局域网`ip`。

## 生产坏境部署

1. `npm run build`
npm run build打包时，注释redux-logger

2. 拷贝dist文件夹至服务器即可
