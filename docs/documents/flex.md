<script>
  import '@/lib'
</script>

# Flex<Badge text="组合" title="该选择器需要组合使用" />

## 示例

### 弹性布局

使用 `flex` 启用弹性布局，使用 `row` 或 `column` 设置主轴方向。

flex-`num` 用于设置 flex 值(1-12)，`flex-none` 为 `none`。

```html
<div class="flex row gap-12">
  <div class="flex col gap-sm">
    <div class="bg-light p-8 flex-none">flex-none</div>
    <div class="bg-light p-8 flex-1">flex-2</div>
  </div>

  <div class="flex row gap-sm flex-1">
    <div class="bg-light p-8 flex-none">flex-none</div>
    <div class="bg-light p-8 flex-1">flex-1</div>
    <div class="bg-light p-8 flex-2">flex-2</div>
    <div class="bg-light p-8 flex-3">flex-3</div>
  </div>
</div>
```

<div class="flex row gap-12">
  <div class="flex col gap-sm">
    <div class="bg-light p-8 flex-none">flex-none</div>
    <div class="bg-light p-8 flex-1">flex-2</div>
  </div>

  <div class="flex row gap-sm flex-1">
    <div class="bg-light p-8 flex-none">flex-none</div>
    <div class="bg-light p-8 flex-1">flex-1</div>
    <div class="bg-light p-8 flex-2">flex-2</div>
    <div class="bg-light p-8 flex-3">flex-3</div>
  </div>
</div>

### 对齐方式

```html
<div class="flex row gap-sm between mt-sm">
  <div class="bg-light p-8">between</div>
  <div class="bg-light p-8">between</div>
  <div class="bg-light p-8">between</div>
</div>

<div class="flex row gap-sm around mt-sm">
  <div class="bg-light p-8">around</div>
  <div class="bg-light p-8">around</div>
  <div class="bg-light p-8">around</div>
</div>

<div class="flex row gap-sm end-h mt-sm">
  <div class="bg-light p-8">end-h</div>
  <div class="bg-light p-8">end-h</div>
  <div class="bg-light p-8">end-h</div>
</div>
```

<div class="flex row gap-sm between mt-sm">
  <div class="bg-light p-8">between</div>
  <div class="bg-light p-8">between</div>
  <div class="bg-light p-8">between</div>
</div>

<div class="flex row gap-sm around mt-sm">
  <div class="bg-light p-8">around</div>
  <div class="bg-light p-8">around</div>
  <div class="bg-light p-8">around</div>
</div>

<div class="flex row gap-sm end-h mt-sm">
  <div class="bg-light p-8">end-h</div>
  <div class="bg-light p-8">end-h</div>
  <div class="bg-light p-8">end-h</div>
</div>

### 换行

```html
<div class="flex row gap-sm flex-wrap mt-sm">
  <div class="bg-light p-20" v-for="(item, index) in Array.from({ length: 12 })" :key="index">wrap</div>
</div>
```

<div class="flex row gap-sm flex-wrap mt-sm">
  <div class="bg-light p-20" v-for="(item, index) in Array.from({ length: 12 })" :key="index">wrap</div>
</div>

### Gap

gap-`num` 用于设置 gap 值(1-48)

<div class="flex row gap-16">
  <div class="bg-light p-8">gap-16</div>
  <div class="bg-light p-8">gap-16</div>
  <div class="bg-light p-8">gap-16</div>
</div>

<div class="flex row gap-v-sm mt-md flex-wrap">
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
  <div class="bg-light p-8">gap-v-sm</div>
</div>

## 对照表

| 类名          | 描述                    | 值              | 依赖类名 |
| ------------- | ----------------------- | --------------- | -------- |
| flex          | 启用 flex 布局          | flex            | -        |
| flex-inline   | 启用 flex 布局 (内联)   | flex-inline     | flex     |
| flex-wrap     | 换行                    | wrap            | flex     |
| flex-nowrap   | 不换行                  | nowrap          | flex     |
| flex-`num`    | flex 值 (1-12)          | `num`           |          |
| flex-none     | flex 值为 none          | none            |          |
| &.row         | 水平排列 flex-direction | row             | flex     |
| &.column      | 垂直排列 flex-direction | column          | flex     |
| &.col         | &.column 别名           | column          | flex     |
| &.center      | 居中对齐                | center          | flex     |
| &.center-h    | 主轴居中对齐            | center          | flex     |
| &.center-v    | 交叉轴居中对齐          | center          | flex     |
| &.start-h     | 主轴起点对齐            | flex-start      | flex     |
| &.start-v     | 交叉轴起点对齐          | flex-start      | flex     |
| &.end-h       | 主轴终点对齐            | flex-end        | flex     |
| &.end-v       | 交叉轴终点对齐          | flex-end        | flex     |
| &.between     | 主轴两端对齐 (贴边)     | space-between   | flex     |
| &.around      | 主轴两端对齐 (居中)     | space-around    | flex     |
| &.gap-`num`   | 间距 (0-48)             | `num`px         | flex     |
| &.gap-h-`num` | 间距-主轴 (0-48)        | `num`px         | flex     |
| &.gap-v-`num` | 间距-交叉轴 (0-48)      | `num`px         | flex     |
| &.gap-xs      | 间距                    | --ac-padding-xs | flex     |
| &.gap-sm      | 间距                    | --ac-padding-sm | flex     |
| &.gap-md      | 间距                    | --ac-padding-md | flex     |
| &.gap-lg      | 间距                    | --ac-padding-lg | flex     |
| &.gap-xl      | 间距                    | --ac-padding-xl | flex     |
