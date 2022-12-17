# 多個過濾條件說明

## 流程

### 1. 單一個 todos 的 state

說明:

- 簡單的條件過濾可以這樣作
- 各條件寫為`(傳入todos陣列) => 依條件過濾的新陣列`
- 原本 todos 不會被改變

```text
條件3(條件2(條件1(todos)))  之後 map 出來呈現
```

### 2. 改用多個判斷函式

- 各條件寫為判斷函式，產生與目前所有資料項目對應的 boolean 陣列(如下)
- 最後一個 filter 中的 callback 判斷函式中，作各判斷`&&`運算組合後，決定是否呈現於網頁上

```jsx
// 條件1: (a) => Array<true|false>
const typeFilter = (currentFilter, todoArray) => {
  return todoArray.map((v, i) => {
    switch(currentFilter){
        case 'Active':
            return  !v.completed
        case 'Completed':
            return v.completed
        case 'All'
        default:
            return true
    }
  })
}

// 條件2: (a) => Array<true|false>
const searchFilter = (searchWord, todoArray) => {
  return todoArray.map((v, i) => {
    return v.text.includes(searchWord)
  })
}
```

### 3. 使用兩個 state

- todos: 所有原本的待辨事項(原始資料)
- todosDisplay: 呈現用的待辨事項

```
todos -> (條件1) -> newTodos1 -> (條件2) ->newTodos2 -> ...
```

說明:

- 可應用各種情況，或有先後次序的條件過濾，不一定是 filter 能作到的(例如:排序)
- 需搭配`useEffect`使用
- 各條件寫為`(傳入todos陣列) => 依條件過濾的新陣列`
- 經過各條件後過濾 todos 資料陣列，之後設定到 todosDisplay 中
