<script>
  import '@/lib'
</script>

# Color

设置各种颜色。字体颜色及背景颜色

## 示例

```html
<div class="flex row gap-sm">
  <div class="color-default">color-default</div>
  <div class="color-title">color-title</div>
  <div class="color-gray">color-gray</div>
  <div class="color-light">color-light</div>
  <div class="color-disabled">color-disabled</div>
</div>

<div class="flex row gap-sm mt-md">
  <div class="color-primary">color-primary</div>
  <div class="color-success">color-success</div>
  <div class="color-warn">color-warn</div>
  <div class="color-error">color-error</div>
  <div class="color-blue">color-blue</div>
</div>

<div class="flex row gap-sm mt-md">
  <div class="p-8 bg-primary">bg-primary</div>
  <div class="p-8 bg-success">bg-success</div>
  <div class="p-8 bg-warn">bg-warn</div>
  <div class="p-8 bg-error">bg-error</div>
</div>
```

<div class="flex row gap-sm">
  <div class="color-default">color-default</div>
  <div class="color-title">color-title</div>
  <div class="color-gray">color-gray</div>
  <div class="color-light">color-light</div>
</div>

<div class="flex row gap-sm mt-md">
  <div class="color-primary">color-primary</div>
  <div class="color-success">color-success</div>
  <div class="color-warn">color-warn</div>
  <div class="color-error">color-error</div>
  <div class="color-blue">color-blue</div>
</div>

<div class="flex row gap-sm mt-md">
  <div class="p-8 bg-primary">bg-primary</div>
  <div class="p-8 bg-success">bg-success</div>
  <div class="p-8 bgc-warn">bg-warn</div>
  <div class="p-8 bgc-error">bg-error</div>
</div>

## 通用颜色名称

```less
@colors: transparent, white, primary, info, success, warn, error, blue, green, yellow, red, title, default, gray, light, disabled,
  background;
```

- `blue` 对应变量 `--ac-color-blue`
- `green` 对应变量 `--ac-color-green`
- `yellow` 对应变量 `--ac-color-yellow`
- `red` 对应变量 `--ac-color-red`
- `white` 对应变量 `--ac-color-white`
- `primary` 对应变量 `--ac-color-primary`
- `info` blue 的别名
- `success` green 的别名
- `warn` yellow 的别名
- `error` red 的别名
- `background` 对应变量 `--ac-color-background`
- `transparent` 对应变量 `--ac-color-transparent`
- `default` 对应变量 `--ac-color-default`
- `title` 对应变量 `--ac-color-title`
- `gray` 对应变量 `--ac-color-gray`
- `light` 对应变量 `--ac-color-light`
- `disabled` 对应变量 `--ac-color-disabled`
- `placeholder` 对应变量 `--ac-color-placeholder`

## 对照表

| 类名         | 描述                    | 值     | 依赖类名 |
| ------------ | ----------------------- | ------ | -------- |
| color-`name` | color:`name`            | `name` | -        |
| bg-`name`    | background:`name`       | `name` | -        |
| bgx-`name`   | background-color:`name` | `name` | -        |

## 其它颜色

- border-color [查看](border.md#边框颜色)
