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
import { articleError400, articleError400Me, checkNullAndUnde, consoleLog, is200 } from '../assets/jsLib';
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
        "wt":period.wt,
        "st":period.st,
        "title":title,
        "et":period.et
      });
      consoleLog(data);
      try {
        let response= await insertRequest(data);        
        is200(response,this.insertDoneF);
      } catch (error) {
        this.insertErrorF(error.response);
      }
    },
    insertDoneF(r){
      alert('작성되었습니다');
      this.$router.push('/write/list?p=1');
    },
    insertErrorF(r){
      if(r.status===400){
        articleError400(r);
      }else{
        alert("알 수 없는 에러 발생");
      }
    }
  },
}
</script>
<style lang="">
    
</style>