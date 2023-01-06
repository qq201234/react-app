# log

## Proxy

react 中的 package.json 需設定 proxy 到 server 的位置，以避免開發期間 cors 問題，例如:

- react 在 localhost:3000
- node 在 localhost:3005

```json
"proxy": "http://localhost:3005"
```

在 react 中要向 node 進行 restful 時，直接用 `api/users`網址即可:

```js
const res = await axios.post('api/users/login', fields)
```

## 絕對路徑導入

> 適合專案內的目錄結構很深又要互相導入引用時

在專案根目錄，建立一個`jsconfig.json`檔，內容如下:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

之後要導入`src/components/Button.js`檔案時，可以使用絕對路徑(自 `src` 開始，`src` 不需要)

```js
import Button from 'components/Button'
```
