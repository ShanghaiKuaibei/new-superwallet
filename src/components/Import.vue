<template>
    <div class="importBox">
        <mt-header :title="$t('message.importbi.header')">
            <mt-button slot="right" @click="goChoice">X</mt-button>
        </mt-header>
        <div class="importFooter">
            <mt-field label="" v-model="seed" :placeholder="$t('message.importbi.form.ScanTypeSeed')">
                <span style="color: #54D4DC;" class="mui-icon-extra mui-icon-extra-sweep"></span>
            </mt-field>
            <select :name="$t('message.importbi.form.ChooseCoinType')" @click="showBi">
                <option value="">{{optionText}}</option>
             </select>
            <mt-field label="" v-model="seed" :placeholder="$t('message.importbi.form.PleaseTypeAlias')">
            </mt-field>
            <button @click="goWell">{{$t('message.importbi.Confirm')}}</button>
        </div>
        <div class="myChoiceBox" v-if="showMyBox">
            <div class="mui-card">
                <form class="mui-input-group">
                    <div class="mui-input-row mui-radio" v-for="(item,i) in msg" :key="i">
                        <label>{{item}}</label>
                        <input name="radio1" type="radio" @click="choiceBi(item)">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        Header,
        Field,
        Radio,
        MessageBox
    } from 'mint-ui';
    export default {
        data() {
            return {
                seed: '',
                biname: '',
                othername: '',
                msg: this.$t("message.choice.allBi"),
                showMyBox: false,
                optionText:this.$t('message.importbi.form.ChooseCoinType')
            }
        },
        methods: {
            goWell() {
                this.$router.push({
                    path: "/wallet"
                })
            },
            goChoice() {
                this.$router.push({
                    path: "/choice"
                })
            },
            showBi() {
                this.showMyBox = true;
            },
            choiceBi(text){
                this.optionText=text;
                this.showMyBox = false;

            }
        }
    }
</script>
<style lang="scss">
    @import '../../static/lib/mui/css/icons-extra.css';
    @import '../../static/lib/mui/css/mui.min.css';
    .clearfix::after,
    .clearfix::before {
        content: "";
        display: block;
        visibility: hidden;
        height: 0;
        line-height: 0;
        clear: both;
    }
    .importBox {
        background-color: #F7F7F7;
        height: 100vh;
        input {
            border: none !important;
            padding: 0 !important;
        }
        .mint-header {
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            height: 3rem;
            .mint-header-button.is-left {
                color: #5FC0C0 !important;
                font-size: 1rem;
            }
            .mint-header-button.is-right {
                color: #5FC0C0 !important;
                font-size: 1rem;
            }
        }
        .mint-header-title {
            color: #000 !important;
            font-size: 1.1rem !important;
            overflow:visible !important;
        }
    }
    .importFooter {
        select {
            width: 100vw;
            height: 4rem;
            margin-bottom: 0;
            -webkit-appearance: menulist !important;
            padding-left: 1rem;
            option {
                display: none;
            }
        }
        button {
            width: 12rem;
            height: 2rem;
            display: block;
            margin: 1rem auto;
            font-size: 1rem;
            color: #fff;
            background-color: #55D7DF;
            border: none;
            border-radius: 5px;
        }
    }
    .myChoiceBox {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        .mui-card {
            font-size: 1rem;
            position: relative;
            overflow: hidden;
            margin: 0;
            border-radius: 0;
            background-color: transparent;
            -webkit-box-shadow: none;
            box-shadow: none;
            width: 88%;
            margin: 1.5rem auto;
            max-height: 90vh;
            overflow: scroll;
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