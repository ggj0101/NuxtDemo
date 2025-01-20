<template>
  
  <div>
    <div class="d-block pa-2 bg-deep-purple">
      <h1>Index page {{ _title }} : {{ year }}</h1>
    </div>
    <div class="d-block pa-2 bg-black">
      <h1>Index page {{ _title }} : {{ year }}</h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
const year: string = "2025"
const _title: string = `PAGE ABOUT`
</script>