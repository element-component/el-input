# el-input
> Input 输入框

-----------

## 1. 基本用法

<el-input
  placeholder="请输入内容"
  :model.sync="input">
</el-input>

```html
<el-input
  placeholder="请输入内容"
  :model.sync="input">
</el-input>
```

## 2. 禁用状态

<el-input
  disabled
  placeholder="请输入内容"
  :model.sync="input1">
</el-input>

```html
<el-input
  disabled
  placeholder="请输入内容"
  :model.sync="input1">
</el-input>
```

## 3. 特殊用法

<el-input
  effect="special"
  type="email"
  placeholder="邮箱地址"
  :model.sync="input6">
</el-input>

```html
<el-input
  effect="special"
  type="email"
  placeholder="邮箱地址"
  :model.sync="input6">
</el-input>
```

## 4. 数字输入框

<el-input
  effect="number"
  placeholder="只允许数字"
  :model.sync="input3">
</el-input>

```html
<el-input
  effect="number"
  placeholder="只允许数字"
  :model.sync="input3">
</el-input>
```

## 5. 有输入建议


<el-input
  :suggestion="['提示', '信息', '饿了么']"
  placeholder="请输入内容"
  :model.sync="input4">
</el-input>

```html
<el-input
  :suggestion="['提示', '信息', '饿了么']"
  placeholder="请输入内容"
  :model.sync="input4">
</el-input>
```

## 6. 有输入历史

<el-input
  cache
  placeholder="请输入内容"
  :model.sync="input5">
</el-input>

```html
<el-input
  cache
  placeholder="请输入内容"
  :model.sync="input5">
</el-input>
```
