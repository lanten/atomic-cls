<script>
  import '@/lib'
</script>

# Grid<Badge text="组合" title="该选择器需要组合使用" />

网格布局 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)

- 目前支持的属性有限，待完善

## 示例

### 基本用法

- 使用 `.grid` 启用 grid 布局
- 使用 `.col-*` 定义列数
- `*` 为 1-24 的整数

<div class="grid col-4 gap-12">
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
</div>

```html
<div class="grid col-4 gap-12">
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
</div>
```

### 自适应（响应式）

- 使用 `.grid` 启用 grid 布局
- 使用 `.col-auto-*` 定义最小列宽
- `*` 为 10 的倍数，最小值 10，最大值 500

<div class="grid col-auto-120 gap-12">
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
</div>

> 尝试缩小窗口宽度查看响应式效果

```html
<div class="grid col-auto-120 gap-12">
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
  <div class="bg-gray p-8">item</div>
</div>
```

### 居中

#### center

<div class="grid col-auto-120 gap-12 center">
  <div class="bg-gray fs-12">item</div>
  <div class="bg-gray fs-14">item</div>
  <div class="bg-gray fs-22">item</div>
  <div class="bg-gray fs-34">item</div>
</div>

```html
<div class="grid col-auto-120 gap-12 center">
  <div class="bg-gray fs-12">item</div>
  <div class="bg-gray fs-14">item</div>
  <div class="bg-gray fs-22">item</div>
  <div class="bg-gray fs-34">item</div>
</div>
```

#### center-v

<div class="grid col-auto-120 gap-12 center-v">
  <div class="bg-gray fs-12">item</div>
  <div class="bg-gray fs-14">item</div>
  <div class="bg-gray fs-22">item</div>
  <div class="bg-gray fs-34">item</div>
</div>

```html
<div class="grid col-auto-120 gap-12 center-v">
  <div class="bg-gray fs-12">item</div>
  <div class="bg-gray fs-14">item</div>
  <div class="bg-gray fs-22">item</div>
  <div class="bg-gray fs-34">item</div>
</div>
```

#### center-h

<div class="grid col-auto-120 gap-12 center-h">
  <div class="bg-gray fs-12">item</div>
  <div class="bg-gray fs-14">item</div>
  <div class="bg-gray fs-22">item</div>
  <div class="bg-gray fs-34">item</div>
</div>

```html
<div class="grid col-auto-120 gap-12 center-h">
  <div class="bg-gray fs-12">item</div>
  <div class="bg-gray fs-14">item</div>
  <div class="bg-gray fs-22">item</div>
  <div class="bg-gray fs-34">item</div>
</div>
```

#### 内部居中

<div class="grid col-auto-120 gap-12">
  <div class="bg-gray fs-12 center-v">item</div>
  <div class="bg-gray fs-14 center-h">item</div>
  <div class="bg-gray fs-22 center-v">item</div>
  <div class="bg-gray fs-34 center-h">item</div>
</div>

## 对照表

| 类名           | 描述                     | 值                                  | 依赖类名 |
| -------------- | ------------------------ | ----------------------------------- | -------- |
| grid           | 启用 grid 布局           | display: grid                       | -        |
| col-{num}      | 设置列数                 | 为 1-24 的整数                      | grid     |
| col-auto-{num} | 自适应布局，设置最小列宽 | 为 10 的倍数，最小值 10，最大值 500 | grid     |
| center         | 居中 (垂直+水平)         | -                                   | grid     |
| center-v       | 居中 (垂直)              | -                                   | grid     |
| center-h       | 居中 (水平)              | -                                   | grid     |
| center         | 内部元素居中 (垂直+水平) | -                                   | -        |
| center-v       | 内部元素居中 (垂直)      | -                                   | -        |
| center-h       | 内部元素居中 (水平)      | -                                   | -        |
