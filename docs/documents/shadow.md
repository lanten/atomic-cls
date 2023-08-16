<script>
  import '@/lib'
</script>

# Shadow

阴影样式

## 示例

```html
<div class="flex col gap-8 center">
  <p>底部 (默认)</p>
  <div class="p-24 br-8 shadow-xs">shadow-xs</div>
  <div class="p-24 br-8 shadow-sm">shadow-sm</div>
  <div class="p-24 br-8 shadow-md">shadow-md</div>
  <div class="p-24 br-8 shadow-lg">shadow-lg</div>
  <div class="p-24 br-8 shadow-xl">shadow-xl</div>

  <p>居中</p>
  <div class="p-24 br-8 shadow-xs shadow-center">shadow-xs</div>
  <div class="p-24 br-8 shadow-sm shadow-center">shadow-sm</div>
  <div class="p-24 br-8 shadow-md shadow-center">shadow-md</div>
  <div class="p-24 br-8 shadow-lg shadow-center">shadow-lg</div>
  <div class="p-24 br-8 shadow-xl shadow-center">shadow-xl</div>

  <p>顶部</p>
  <div class="p-24 br-8 shadow-xs shadow-top">shadow-xs</div>
  <div class="p-24 br-8 shadow-sm shadow-top">shadow-sm</div>
  <div class="p-24 br-8 shadow-md shadow-top">shadow-md</div>
  <div class="p-24 br-8 shadow-lg shadow-top">shadow-lg</div>
  <div class="p-24 br-8 shadow-xl shadow-top">shadow-xl</div>
</div>
```

<div class="flex col gap-8" style="width:200px">
  <p>底部 (默认)</p>
  <div class="p-24 br-8 shadow-xs">shadow-xs</div>
  <div class="p-24 br-8 shadow-sm">shadow-sm</div>
  <div class="p-24 br-8 shadow-md">shadow-md</div>
  <div class="p-24 br-8 shadow-lg">shadow-lg</div>
  <div class="p-24 br-8 shadow-xl">shadow-xl</div>

  <p>居中</p>
  <div class="p-24 br-8 shadow-xs shadow-center">shadow-xs</div>
  <div class="p-24 br-8 shadow-sm shadow-center">shadow-sm</div>
  <div class="p-24 br-8 shadow-md shadow-center">shadow-md</div>
  <div class="p-24 br-8 shadow-lg shadow-center">shadow-lg</div>
  <div class="p-24 br-8 shadow-xl shadow-center">shadow-xl</div>

  <p>顶部</p>
  <div class="p-24 br-8 shadow-xs shadow-top">shadow-xs</div>
  <div class="p-24 br-8 shadow-sm shadow-top">shadow-sm</div>
  <div class="p-24 br-8 shadow-md shadow-top">shadow-md</div>
  <div class="p-24 br-8 shadow-lg shadow-top">shadow-lg</div>
  <div class="p-24 br-8 shadow-xl shadow-top">shadow-xl</div>
</div>

## 对照表

| 类名          | 描述                                                        | 值  | 依赖类名      |
| ------------- | ----------------------------------------------------------- | --- | ------------- |
| shadow-xs     | box-shadow: var(--ac-size-shadow-xs) var(--ac-color-shadow) | -   | -             |
| shadow-sm     | box-shadow: var(--ac-size-shadow-sm) var(--ac-color-shadow) | -   | -             |
| shadow-md     | box-shadow: var(--ac-size-shadow-md) var(--ac-color-shadow) | -   | -             |
| shadow-lg     | box-shadow: var(--ac-size-shadow-lg) var(--ac-color-shadow) | -   | -             |
| shadow-xl     | box-shadow: var(--ac-size-shadow-xl) var(--ac-color-shadow) | -   | -             |
| shadow-center | 居中阴影                                                    | -   | shadow-{size} |
| shadow-top    | 顶部阴影                                                    | -   | shadow-{size} |
