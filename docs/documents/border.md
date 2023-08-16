<script>
  import '@/lib'
</script>

# Border

## 圆角

设置圆角 border-radius

br-`num` (0-24)

### 示例

```html
<div class="flex row gap-8">
  <div class="bg-light p-4 br-2">2px</div>
  <div class="bg-light p-4 br-3">3px</div>
  <div class="bg-light p-4 br-5">5px</div>
  <div class="bg-light p-4 br-8">8px</div>
  <div class="bg-light p-4 br-15">15px</div>
  <div class="bg-light p-4 br-24">24px</div>
</div>
```

效果如下：

<div class="flex row gap-8">
  <div class="bg-light p-4 br-2">2px</div>
  <div class="bg-light p-4 br-3">3px</div>
  <div class="bg-light p-4 br-5">5px</div>
  <div class="bg-light p-4 br-8">8px</div>
  <div class="bg-light p-4 br-15">15px</div>
  <div class="bg-light p-4 br-24">24px</div>
</div>

### 对照表

| 类名     | 描述                      | 值      | 依赖类名 |
| -------- | ------------------------- | ------- | -------- |
| br-`num` | 圆角 border-radius (0-24) | `num`px | -        |

## 边框 <Badge text="组合" title="该选择器需要组合使用" />

用于渲染边框，支持完整边框及单侧边框

引用 `.border` 不会渲染边框，需要配合其他选择器使用

### 示例

```html
<div class="flex row gap-8">
  <div class="p-4 border rect-1">rect</div>
  <div class="p-4 border rect-1 split">rect</div>
  <div class="p-4 border rect-4">rect</div>
  <div class="p-4 border left-1">left</div>
  <div class="p-4 border top-3">top</div>
  <div class="p-4 border right-1">right</div>
  <div class="p-4 border bottom-1">bottom</div>
  <div class="p-4 border rect-1 hide">hide</div>
  <div class="p-4 border rect-1 hide-last">hide-last</div>
  <div class="p-4 border rect-1 hide-last">hide-last</div>
</div>
```

效果如下：

<div class="flex row gap-8">
  <div class="p-4 border rect-1">rect</div>
  <div class="p-4 border rect-1 split">rect</div>
  <div class="p-4 border rect-4">rect</div>
  <div class="p-4 border left-1">left</div>
  <div class="p-4 border top-3">top</div>
  <div class="p-4 border right-1">right</div>
  <div class="p-4 border bottom-1">bottom</div>
  <div class="p-4 border rect-1 hide">hide</div>
  <div class="p-4 border rect-1 hide-last">hide-last</div>
  <div class="p-4 border rect-1 hide-last">hide-last</div>
</div>

### 对照表

| 类名           | 描述                                | 值                           | 依赖类名 |
| -------------- | ----------------------------------- | ---------------------------- | -------- |
| border         | 初始化边框样式，但不设 border-width | -                            | -        |
| &.rect-`num`   | 全边框 border-width (0-6)           | `num`px                      | .border  |
| &.left-`num`   | 左侧边框 border-width (0-6)         | `num`px                      | .border  |
| &.top-`num`    | 顶部边框 border-width (0-6)         | `num`px                      | .border  |
| &.right-`num`  | 右侧边框 border-width (0-6)         | `num`px                      | .border  |
| &.bottom-`num` | 底部边框 border-width (0-6)         | `num`px                      | .border  |
| &.hide         | 隐藏边框                            | 0                            | .border  |
| &.hide-first   | 隐藏同级第一个元素的边框            | 0                            | .border  |
| &.hide-last    | 隐藏同级最后一个元素的边框          | 0                            | .border  |
| &.split        | 分割线，颜色要浅一点                | var(--ac-color-border-split) | .border  |

## 边框颜色

设置边框颜色

### 示例

```html
<div class="flex row gap-8">
  <div class="p-4 border rect-1 bc-primary">primary</div>
  <div class="p-4 border rect-1 bc-blue">blue</div>
  <div class="p-4 border rect-1 bc-success">success</div>
  <div class="p-4 border rect-1 bc-transparent">transparent</div>
  <div class="p-4 border rect-1 bc-background">transparent</div>
</div>
```

效果如下：

<div class="flex row gap-8">
  <div class="p-4 border rect-1 bc-primary">primary</div>
  <div class="p-4 border rect-1 bc-blue">blue</div>
  <div class="p-4 border rect-1 bc-success">success</div>
  <div class="p-4 border rect-1 bc-transparent">transparent</div>
  <div class="p-4 border rect-1 bc-background">background</div>
</div>

- 完整颜色名称 [查看](color.md#通用颜色名称)

### 对照表

| 类名       | 描述                               | 值     | 依赖类名 |
| ---------- | ---------------------------------- | ------ | -------- |
| bc-`color` | 设置边框颜色 border-color: `color` | colors | -        |
