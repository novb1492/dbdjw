<template lang="">
    <div>
        <button @click="goToPage">Go to page 1</button>
    </div>
</template>
<script>
export default {
    name:'pbtn',
    methods: {
    goToPage() {
      this.$router.push({
        path: '/write/list-own',
        query: { p: 2 }
      })
    }
  }
}
</script>
<style lang="">
    
</style>