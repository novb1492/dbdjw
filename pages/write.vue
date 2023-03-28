<template lang="">
    <div> 
        <TitleCompoVue ref="title" />
        <CkeditorCompo ph="당신의 함께 뛸 친구에게 말해주세요" ref="editor"/>
        <GoalPeriodVue ref="period" />
        <WriteBtn btnclazz="btn-outline-success" text="등록" v-on:click_action="clickAction" style="margin-left:1000   px"/>
    </div>
</template>
<script>
import CkeditorCompo from '../components/CkeditorCompo.vue';
import GoalPeriodVue from '../components/GoalPeriod.vue';
import TitleCompoVue from '../components/TitleCompo.vue';
import WriteBtn from '../components/WriteBtn.vue';
export default {
  components: { CkeditorCompo, WriteBtn, GoalPeriodVue,TitleCompoVue},
  middleware: 'authenticated',
  methods: {
    clickAction() {
      let text=this.$refs.editor.getText();
      let period=this.$refs.period.getData();
      let title=this.$refs.title.getData();
      let data=JSON.stringify({
        "text":text,
        "sd":period.sd,
        "ed":period.ed,
        "title":title
      });
      console.log(data);
    }
  },
}
</script>
<style lang="">
    
</style>