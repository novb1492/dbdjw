<template lang="">
    <div class="wirte_container"> 
      <div class="w_row">
        <TitleCompoVue ref="title" />
        <CkeditorCompo ph="당신의 함께 뛸 친구에게 말해주세요" ref="editor"/>
      </div>
        <div class="p_row">
          <GoalPeriodVue ref="period" />
          <WriteBtn btnclazz="btn-outline-success" text="등록" v-on:click_action="clickAction" class="w_b"/>
        </div>
    </div>
</template>
<script>
import { insertRequest } from '../api/articleApi';
import { consoleLog, is200 } from '../assets/jsLib';
import CkeditorCompo from '../components/CkeditorCompo.vue';
import GoalPeriodVue from '../components/GoalPeriod.vue';
import TitleCompoVue from '../components/TitleCompo.vue';
import WriteBtn from '../components/WriteBtn.vue';
export default {
  components: { CkeditorCompo, WriteBtn, GoalPeriodVue,TitleCompoVue},
  methods: {
    async clickAction() {
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
      try {
        let response= await insertRequest(data);
        is200(response);

      } catch (error) {
        consoleLog(error);
      }
    },
    insertErrorF(r){
      consoleLog('fdfs');
    }
  },
}
</script>
<style lang="">
    
</style>