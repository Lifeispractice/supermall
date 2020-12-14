<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "TabBar"
  }

</script>
<style scope>
#tab-bar {
    display: flex;
    background: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 10px rgba(100, 100, 100, .8);
  }
</style>
