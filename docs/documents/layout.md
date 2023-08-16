<script>
  import '@/lib'
</script>

# Layout

页面布局常用样式

<!-- <div class="container-layout max-1000">container-layout</div> -->

## 对照表

| 类名               | 描述                | 值              | 依赖类名         |
| ------------------ | ------------------- | --------------- | ---------------- |
| full-screen        | height:100%         | -               | -                |
| full-screen-min    | min-height:100%     | -               | -                |
| full-screen-vh     | height:100vh        | -               | -                |
| full-screen-min-vh | min-height:100vh    | -               | -                |
| relative           | position: relative  | -               | -                |
| absolute           | position: absolute  | -               | -                |
| fixed              | position: fixed     | -               | -                |
| ovh                | overflow: hidden    | -               | -                |
| ovh-y              | overflow-y: hidden  | -               | -                |
| ovh-x              | overflow-x: hidden  | -               | -                |
| ova                | overflow: auto      | -               | -                |
| ova-y              | overflow-y: auto    | -               | -                |
| ova-x              | overflow-x: auto    | -               | -                |
| ovv                | overflow: visible   | -               | -                |
| ovv-y              | overflow-y: visible | -               | -                |
| ovv-x              | overflow-x: visible | -               | -                |
| container-layout   | 安全区域居中        | -               | -                |
| &.max-{count}      | 安全区域宽度 {n}px  | n: 100 的整数倍 | container-layout |
| &.max-1080         | 安全区域宽度 1080px | -               | container-layout |
| &.max-1280         | 安全区域宽度 1280px | -               | container-layout |
| &.max-1680         | 安全区域宽度 1680px | -               | container-layout |
| &.max-1920         | 安全区域宽度 1920px | -               | container-layout |
| &.max-2048         | 安全区域宽度 2048px | -               | container-layout |
| safe-area-top      | ios 顶部安全区域    | -               | -                |
| safe-area-bottom   | ios 底部安全区域    | -               | -                |
