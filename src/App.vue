<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
@import 'mint-ui/lib/style.css';
  body,
  html,
  ul,
  li,
  p,
  h1,
  h2 {
    margin: 0;
    padding: 0;
  }
  canvas{
    margin:0 auto !important;
  }
  div{
    box-sizing:content-box !important;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .mint-cell-value {
    height: 4rem;
  }
  .mint-tab-item-label {
    color: inherit;
    font-size: 1.075rem !important;
    line-height: 1;
  }
  .mui-table-view-cell{
    height:3.5rem;
  }
  .mui-table-view-cell>a:not(.mui-btn){
    margin:-0.5rem !important;
    margin-right:-3.5rem !important;
  }
  .mui-table-view-radio .mui-table-view-cell .mui-navigate-right:after{
    color:#43C5CF !important;
  }
  .fa-clone:before{
    margin-right:0.3rem;
  }
  .mint-msgbox-confirm{
    color:#049789;
  }
  .mint-msgbox-message{
    color:#000;
  }
  .mint-header{
    height:3rem !important;
  }
  .mint-header-title{
    overflow:visible !important;
  }
</style>
