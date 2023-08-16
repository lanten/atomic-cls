<script>
  import '@/lib'
</script>

# Atomic CSS 介绍

`Atomic CSS` 是一种 CSS 架构。通过引用表示单一用途样式单元的 class 类，以快速构建 UI。这些样式单元称为“原子”。原子可重用、可叠加。

社区已有的开源实现有 [Tachyons](https://tachyons.io/)、[Tailwind](https://tailwindcss.com/)、[Basscss](https://basscss.com/) 等。

开源项目功能比较全但代码臃肿且命名风格诡异，我们只需要用到其中的一小部分，直接使用这些库很不划算。

### 概述

- 集成常用样式原子
- 纯样式库，只需引入 CSS 文件
- 零外部依赖
- 使用原生 Css Vars 管理变量

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

### 变更内容

#### 字体颜色 命名变更

```html
<!-- old -->
<p class="text-blue">text</p>

<!-- new -->
<p class="color-blue">text</p>
```

#### 字重 命名变更

```html
<!-- old -->
<p class="text-500">text</p>

<!-- new -->
<p class="fw-500">text</p>
```

### class 类名设计准则

- 确认唯一性，不可重复。
- 不使用业务开发中可能常用的词汇。
- 尽可能简洁，并使阅读者能够更精准地通过类名推断出其作用效果。

命名方式参考

- 属性名与数值以 `-` 拼接，如 `padding: 8px` 选择器名称为 `p-8`
- 多词属性: 首字母缩写+属性值，以 `-` 拼接 ，如 `border-radius: 4px` 选择器名称为 `br-4`
