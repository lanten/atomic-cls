<script>
  import '@/lib'
</script>

# BoxModel

定义盒模型，这里主要是指 `margin` 和 `padding`。

mt-`num`, `num` 支持的值为 2 的倍数 (0-48)

## 示例

```html
<div>
  <div class="bg-light p-8">padding-8</div>
  <div class="bg-light pl-8">padding-left-8</div>
  <div class="bg-light pr-8">padding-right-8</div>
  <div class="bg-light pt-8">padding-top-8</div>
  <div class="bg-light m-12">margin-12</div>
  <div class="bg-light mt-sm">margin-top-sm</div>
  <div class="bg-light mt-lg">margin-top-lg</div>
  <div class="bg-light mt-12">margin-top-12</div>
</div>

<div class="flex row gap-md mt-md">
  <div class="bg-light py-8">py-8</div>
  <div class="bg-light px-8">px-8</div>
  <div class="bg-light mx-8">mx-8</div>
  <div class="bg-light my-8">my-8</div>
</div>
```

<div>
  <div class="bg-light p-8">padding-8</div>
  <div class="bg-light pl-8">padding-left-8</div>
  <div class="bg-light pr-8">padding-right-8</div>
  <div class="bg-light pt-8">padding-top-8</div>
  <div class="bg-light m-12">margin-12</div>
  <div class="bg-light mt-sm">margin-top-sm</div>
  <div class="bg-light mt-lg">margin-top-lg</div>
  <div class="bg-light mt-12 ml-12">mt-12 ml-12</div>
</div>

<div class="flex row gap-md mt-md">
  <div class="bg-light py-8">py-8</div>
  <div class="bg-light px-8">px-8</div>
  <div class="bg-light mx-8">mx-8</div>
  <div class="bg-light my-8">my-8</div>
</div>

## 对照表

| 类名     | 描述                          | 值         | 依赖类名 |
| -------- | ----------------------------- | ---------- | -------- |
| m-`num`  | margin:`num`px (0-48)         | `num`px    | -        |
| mt-`num` | margin-top:`num`px (0-48)     | `num`px    | -        |
| mr-`num` | margin-right:`num`px (0-48)   | `num`px    | -        |
| mb-`num` | margin-bottom:`num`px (0-48)  | `num`px    | -        |
| ml-`num` | margin-left:`num`px (0-48)    | `num`px    | -        |
| p-`num`  | padding:`num`px (0-48)        | `num`px    | -        |
| pt-`num` | padding-top:`num`px (0-48)    | `num`px    | -        |
| pr-`num` | padding-right:`num`px (0-48)  | `num`px    | -        |
| pb-`num` | padding-bottom:`num`px (0-48) | `num`px    | -        |
| pl-`num` | padding-left:`num`px (0-48)   | `num`px    | -        |
| bs-box   | box-sizing: border-box        | border-box | -        |
