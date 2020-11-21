<template>
  <div class="input-text__wrapper">
    <div class="input-text__description" v-if="header">
      <label class="input-text__label" v-text="header"></label>
    </div>
    <input class="input-text" :value="value" :disabled="disabled" @focus="generate" @input="update" />
  </div>
</template>

<script>

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>