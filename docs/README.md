<script>
  import '@/lib'
</script>

# Atomic CSS 介绍

`Atomic CSS` 是一种 CSS 架构。通过引用表示单一用途样式单元的 class 类，以快速构建 UI。这些样式单元称为“原子”。原子可重用、可叠加。


---

### 基础示例

```html
<div class="flex row">
  <p class="p-8 color-primary">text</p>
  <p class="p-8 color-gray bg-background br-4">text</p>
  <p class="p-8 color-blue">text</p>
  <p class="p-8 color-green">text</p>
</div>
```

作用效果如下：

<div class="flex row">
  <p class="p-8 color-primary">text</p>
  <p class="p-8 color-gray bg-background br-4">text</p>
  <p class="p-8 color-blue">text</p>
  <p class="p-8 color-green">text</p>
</div>

