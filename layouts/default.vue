<template>
  <div class="main-container ui grid">
    <div class="left-container mobile hidden six wide tablet four wide computer column">

    </div>
    <div class="right-container sixteen wide mobile ten wide tablet twelve wide computer column">
      <nuxt/>
    </div>
  </div>
</template>

<style lang="scss">
.main-container.ui.grid {
  margin: 0;
  min-height: 100vh;
  max-height: 100vh;
  background-color: #ECEFF1;

  .column {
    min-height: 100vh;
    max-height: 100vh;
    overflow-y: scroll;
  }
  .left-container {
    background-color: #CFD8DC;
    border-right: 1px solid #B0BEC5;
  }
}
</style>
