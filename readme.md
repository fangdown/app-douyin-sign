## 说明
nodeJs下批量获取签名或数据
### 原理
1. 使用nodeJs 获取网页原始数据， 
2. 解析数据，获取tac、dytk
3. 根据tac生成签名
4. 根据signature, dytk, user_id等组装请求视频列表数据
5. 设置请求user-agent（需和1步骤中的user-agent保持一致）
### sign.html
在网页模式下，测试签名算法是否有效

### 运行
npm i 

node index.js （为避免对别人的利益造成影响，就不开放了）


