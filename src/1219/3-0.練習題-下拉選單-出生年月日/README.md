# 輸入出生年月日+判斷是否超過 18 歲

製作一個可以輸入西元出生年月日的操作介面，之後用程式判斷輸入的出生年月日是否超過 18 歲

- 操作介面: 三個下拉選單`西元年、月、日`以及一個按鈕`送出檢查`

- 選項: 西元年下拉選單從 1920 到 2010
- 選項: 月份下拉選單從 1 到 12
- 選項: 日期下拉選單要對應年與月份選項(注意: 有閏年即 2 月有 29 日)

- 按下檢查按鈕後，呈現在網頁上的一段文字，`滿18歲` 與 `未滿18歲`

提示:

```js
//18年的微秒值 = 18 * 365.25 * 24 * 60 * 60 * 1000 = 568036800000

// 使用者選了年月日後的微秒值
+new Date('2002/07/12')  // 1026403200000

// 目前(現在)的微秒值
+new Date()

// 2022年7月有幾天
const days = new Date(2022, 7, 0).getDate()
```
