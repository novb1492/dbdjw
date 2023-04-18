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
import { insertRequest } from '../../api/articleApi';
import { articleError400, articleError400Me, checkNullAndUnde, consoleLog, error403, getReToken, is200 } from '../../assets/jsLib';
import CkeditorCompo from '../../components/CkeditorCompo.vue';
import GoalPeriodVue from '../../components/GoalPeriod.vue';
import TitleCompoVue from '../../components/TitleCompo.vue';
import WriteBtn from '../../components/WriteBtn.vue';
export default {
  components: { CkeditorCompo, WriteBtn, GoalPeriodVue, TitleCompoVue },
  data() {
    return {
      retryCount: 0
    }
  },
  methods: {
    async clickAction() {
      let text = this.$refs.editor.getText();
      let period = this.$refs.period.getData();
      let title = this.$refs.title.getData();
      let data = JSON.stringify({
        "text": text,
        "wt": period.wt,
        "st": period.st,
        "title": title,
        "et": period.et
      });
      this.requestWithRetry(data);
    },
    async requestWithRetry(data) {
      try {
        const response = await insertRequest(data);
        this.insertDoneF(response);
      } catch (error) {
        const { status } = error.response;
        if (status === 401) {
          if (this.retryCount < 1) {
            this.retryCount=1;
            await getReToken(); // 엑세스 토큰 재발급
            return this.requestWithRetry(data); // 재발급 후 다시 요청
          }
          error403(this.$router, this.$route);//재발급 횟수 초과
        } else if (status === 403) {//재발급실패
          error403(this.$router, this.$route);
        } else {
          this.insertErrorF(error.response);
        }

      }
    },
    insertDoneF(r) {
      alert('작성되었습니다');
      this.$router.push('/write/list-own?p=1');
    },
    insertErrorF(r) {
      if (r.status === 400) {
        articleError400(r);
      } else if (r.status === 403) {
        error403(this.$router, this.$route);
      } else {
        alert("알 수 없는 에러 발생");
      }
    }
  },
}
</script>
<style lang="">
    
</style>