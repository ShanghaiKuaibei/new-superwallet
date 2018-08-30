<template>
  <div class="home">
    <div class="selectBox">
      <select @click="showlanguage">
                <option value="">{{$t("message.optionText")}}</option>
            </select>
    </div>
    <router-link class="noLogin" to="/locker">{{$t("message.indexMsg")}}&nbsp;&gt;</router-link>
    <div class="myMsgBox" v-if="showMyMsgBox">
      <div class="mui-card">
        <form class="mui-input-group">
          <div class="mui-input-row mui-radio">
            <label>中文</label>
            <input name="radio1" type="radio" @click='changeLang("zhCn")'>
          </div>
          <div class="mui-input-row mui-radio">
            <label>English</label>
            <input name="radio1" type="radio" checked @click='changeLang("en")'>
          </div>
          <div class="mui-input-row mui-radio">
            <label>Español</label>
            <input name="radio1" type="radio" @click='changeLang("es")'>
          </div>
          <div class="mui-input-row mui-radio">
            <label>العَرَبِيَّة‎</label>
            <input name="radio1" type="radio" @click='changeLang("ar")'>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Radio,
    MessageBox
  } from 'mint-ui';
  export default {
    data() {
      return {
        showMyMsgBox: false,
      }
    },
    methods: {

      showlanguage() {
        this.showMyMsgBox = true;
      },
      changeLang(lang) {
        const that = this;
        localStorage.setItem('slang', lang);
        this.$i18n.locale = lang;
        this.showMyMsgBox = false;
      }
    }
  }
</script>

<style lang="scss">
  @import '../../static/lib/mui/css/mui.min.css';
  @import '../../static/lib/mui/css/icons-extra.css';
  .home {
    width: 100%;
    height: 100vh;
    position: relative;
    background: url("../../static/img/bg-login1.jpg") no-repeat;
    background-size: cover;
    .selectBox {
      width: 5rem !important;
      height: 2rem !important;
      padding: 0 !important;
      padding-left: 0.5rem !important;
      position: absolute !important;
      top: 1.5rem !important;
      right: 1rem !important;
      overflow: hidden;
    }
    select {
      width: 100%;
      height: 2rem;
      -webkit-appearance: menulist !important;
      margin: 0;
      padding: 0;
      color: #54D4DC;
      border: 1px solid #ccc;
      option {
        display: none;
      }
    }
    .noLogin {
      display: block;
      width: 100vw;
      text-align: center;
      position: absolute;
      bottom: 8.5rem;
      color: #70B8BE;
    }
  }
  .myMsgBox {
    width: 100vw;
    position: absolute;
    height: 100vh;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    .mui-card {
      font-size: 1rem;
      position: relative;
      overflow: hidden;
      border-radius: 0;
      background-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
      width: 85%;
      margin: 10rem auto;
    }
    .mui-checkbox input[type=checkbox]:checked:before,
    .mui-radio input[type=radio]:checked:before {
      color: #8BDD1D;
    }
    .mint-msgbox-content {
      padding: 0;
    }
    .mui-input-row label {
      padding: 0;
    }
    .mui-input-group .mui-input-row {
      height: 4rem;
      border-bottom: 1px solid #000;
      color: #000;
      font-size: 1.5rem;
      text-align: left;
      line-height: 4rem;
      padding: 0 1rem;
    }
    .mui-checkbox input[type=checkbox],
    .mui-radio input[type=radio] {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border: 0;
      outline: 0!important;
      background-color: transparent;
      -webkit-appearance: none;
    }
  }
</style>
