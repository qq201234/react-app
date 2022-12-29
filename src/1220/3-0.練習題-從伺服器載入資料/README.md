# 說明

## 得到所有資料

> 註: 回應的 json 為物件陣列

- https://my-json-server.typicode.com/eyesofkids/json-fake-data/users

## 得到單一筆資料(用 id 在網址上當參數)

> 註: 回應的 json 為物件

- `id` 為 `107001`: `users/107001`

## 以姓名查詢

> 註: 回應的 json 為物件陣列

- 查詢姓名中有`陳`: `users?name_like=陳`

## 以年齡查詢(大於或小於)

> 註: 回應的 json 為物件陣列

- 大於等於 20 歲: `users?age_gte=20`
- 小於等於 20 歲:`users?age_lte=20`
