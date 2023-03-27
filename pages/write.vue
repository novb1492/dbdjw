<template lang="">
    <div> 
        <CkeditorCompo ph="당신의 함께 뛸 친구에게 말해주세요"/>
        <GoalPeriodVue />
        <WriteBtn text="등록" v-on:click_action="clickAction"/>
    </div>
</template>
<script>
import CkeditorCompo from '../components/CkeditorCompo.vue';
import GoalPeriodVue from '../components/GoalPeriod.vue';
import WriteBtn from '../components/WriteBtn.vue';
export default {
  components: { CkeditorCompo, WriteBtn, GoalPeriodVue},
  methods: {
    clickAction() {
      alert('dfd');
    }
  },
}
</script>
<style lang="">
    
</style>