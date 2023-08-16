<script setup lang="ts">
  import '@/lib'
  import { ref } from 'vue'

  const show1 = ref(true)
  const show2 = ref(true)
  const show3 = ref(true)
  const show4 = ref(true)
  const show5 = ref(true)
  const show6 = ref(true)
  const show7 = ref(true)
  const show8 = ref(true)
  const show9 = ref(true)
  const show10 = ref(true)
  const show11 = ref(true)
</script>

# Animation

动画

### ac-rotate

```html
<div class="flex center">
  <span class="ac-rotate fs-48">🤪</span>
</div>
```

<div class="flex center mt-24">
  <span class="ac-rotate fs-48">🤪</span>
</div>

### ac-fade

<div class="mt-12 flex row center-v gap-8">
  <button @click="show1 = !show1">toggle</button>
  <Transition name="ac-fade">
    <div v-if="show1">ac-fade</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show1 = !show1">toggle</button>
  <Transition name="ac-fade">
    <div v-if="show1">ac-fade</div>
  </Transition>
</div>
```

### ac-slide-up

<div class="mt-12 flex row center-v gap-8">
  <button @click="show2 = !show2">toggle</button>
  <Transition name="ac-slide-up">
    <div v-if="show2">ac-slide-up</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show2 = !show2">toggle</button>
  <Transition name="ac-slide-up">
    <div v-if="show2">ac-slide-up</div>
  </Transition>
</div>
```

### ac-slide-down

<div class="mt-12 flex row center-v gap-8">
  <button @click="show3 = !show3">toggle</button>
  <Transition name="ac-slide-down">
    <div v-if="show3">ac-slide-down</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show3 = !show3">toggle</button>
  <Transition name="ac-slide-down">
    <div v-if="show3">ac-slide-down</div>
  </Transition>
</div>
```

### ac-slide-left

<div class="mt-12 flex row center-v gap-8">
  <button @click="show4 = !show4">toggle</button>
  <Transition name="ac-slide-left">
    <div v-if="show4">ac-slide-left</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show4 = !show4">toggle</button>
  <Transition name="ac-slide-left">
    <div v-if="show4">ac-slide-left</div>
  </Transition>
</div>
```

### ac-slide-right

<div class="mt-12 flex row center-v gap-8">
  <button @click="show5 = !show5">toggle</button>
  <Transition name="ac-slide-right">
    <div v-if="show5">ac-slide-right</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show5 = !show5">toggle</button>
  <Transition name="ac-slide-right">
    <div v-if="show5">ac-slide-right</div>
  </Transition>
</div>
```

### ac-zoom

<div class="mt-12 flex row center-v gap-8">
  <button @click="show6 = !show6">toggle</button>
  <Transition name="ac-zoom">
    <div v-if="show6">ac-zoom</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show6 = !show6">toggle</button>
  <Transition name="ac-zoom">
    <div v-if="show6">ac-zoom</div>
  </Transition>
</div
```

### ac-move

<div class="mt-12 flex row center-v gap-8">
  <button @click="show7 = !show7">toggle</button>
  <Transition name="ac-move">
    <div v-if="show7">ac-move</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show7 = !show7">toggle</button>
  <Transition name="ac-move">
    <div v-if="show7">ac-move</div>
  </Transition>
</div
```

### ac-move-top

<div class="mt-12 flex row center-v gap-8">
  <button @click="show8 = !show8">toggle</button>
  <Transition name="ac-move-top">
    <div v-if="show8">ac-move-top</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show8 = !show8">toggle</button>
  <Transition name="ac-move-top">
    <div v-if="show8">ac-move-top</div>
  </Transition>
</div
```

### ac-move-bottom

<div class="mt-12 flex row center-v gap-8">
  <button @click="show9 = !show9">toggle</button>
  <Transition name="ac-move-bottom">
    <div v-if="show9">ac-move-bottom</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show9 = !show9">toggle</button>
  <Transition name="ac-move-bottom">
    <div v-if="show9">ac-move-bottom</div>
  </Transition>
</div
```

### ac-move-left

<div class="mt-12 flex row center-v gap-8">
  <button @click="show10 = !show10">toggle</button>
  <Transition name="ac-move-left">
    <div v-if="show10">ac-move-left</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show10 = !show10">toggle</button>
  <Transition name="ac-move-left">
    <div v-if="show10">ac-move-left</div>
  </Transition>
</div
```

### ac-move-right

<div class="mt-12 flex row center-v gap-8">
  <button @click="show11 = !show11">toggle</button>
  <Transition name="ac-move-right">
    <div v-if="show11">ac-move-right</div>
  </Transition>
</div>

```html
<div class="mt-12 flex row center-v gap-8">
  <button @click="show11 = !show11">toggle</button>
  <Transition name="ac-move-right">
    <div v-if="show11">ac-move-right</div>
  </Transition>
</div
```
