<template lang="">
    <div>
        <MainNavCompo/>
        <nuxt />
    </div>
</template>
<script>
import MainNavCompo from '../components/nav/MainNavCompo.vue';
export default {
    components: { MainNavCompo },
}
</script>