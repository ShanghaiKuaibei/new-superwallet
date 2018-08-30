<template>
    <div class="sendBox">
        <mt-header fixed :title='$t("message.send.header")'>
            <mt-button slot="left" @click="goBack">&lt;</mt-button>
        </mt-header>
        <div class="sendbi">
            <mt-field :label='$t("message.send.form.send.title")' :placeholder='$t("message.send.form.send.pla1")+btext.name+$t("message.send.form.send.pla2")' v-model="address">
                <span style="color: #54D4DC;" class="mui-icon-extra mui-icon-extra-sweep"></span>
            </mt-field>
            <mt-field :label='$t("message.send.form.money.title")'  :placeholder="btext.bmoney+'￥'+btext.rmoney" v-model="money">
                <span style="color: #54D4DC;"  class="exchange fa fa-exchange"></span>
            </mt-field>
            <mt-field :label='$t("message.send.form.mesg.title")'  :placeholder='$t("message.send.form.mesg.pla")'  v-model="money">
            </mt-field>
            <button>{{$t("message.send.sendbtn") }}</button>
        </div>
        <div class="sendFooter">
            <p>{{$t("message.send.sendfooter.use")}} {{btext.name}}</p>
            <p>{{$t("message.send.sendfooter.ye")}} {{btext.bmoney}}</p>
        </div>
    </div>
</template>
<script>
    import {
        Header,
        Cell,
        Field
    } from 'mint-ui';
    export default {
        data() {
            return {
                address: '',
                money: '',
                btext:JSON.parse(localStorage.getItem('btext'))
            }
        },
        created(){
            console.log(this.btext)
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>
<style lang="scss">
    @import '../../static/lib/mui/css/icons-extra.css';
    .clearfix::after,
    .clearfix::before {
        content: "";
        display: block;
        visibility: hidden;
        height: 0;
        line-height: 0;
        clear: both;
    }
    .mint-header.is-fixed {
        height: 3rem;
    }
    .mint-header {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        .mint-header-button.is-left {
            color: #ccc !important;
            font-size: 2rem;
        }
        .mint-header-button.is-right {
            color: #5FC0C0 !important;
            font-size: 1rem;
            font-weight: 700;
        }
    }
    .mint-header-title {
        color: #000 !important;
        font-size: 1.1rem !important;
    }
    .mint-header .mint-button {
        font-weight: 600;
    }
    .mint-field-core {
        font-size: 1.1rem;
    }
    .sendBox {
        background-color: #F7F7F7;
        height: 100vh;
        input{
            border:none !important;
            padding:0 !important;
        }
        .sendFooter {
            p {
                text-align: center;
            }
            p:nth-child(1) {
                color: #AEAEB0;
                margin-bottom: 0.5rem;
            }
            p:nth-child(2) {
                color: #CCCCCC;
            }
        }
    }
    .sendbi {
        margin-top: 3rem;
        .exchange {
            display:inline-block;
            position:relative;
            transform:rotate(90deg);
        }
        .mint-cell-wrapper{
            display:flex !important;
            flex-direction:column;
            .mint-cell-title{
                width:100% !important;
                text-align:left !important;
                margin-top:1rem;
            }
            .mint-cell-value{
                 width:100% !important;
                text-align:left !important;
                
            }
        }
    }
    
    .sendbi>button {
        width: 90vw;
        height: 3rem;
        display: block;
        margin: 1.2rem auto;
        font-size: 1.2rem;
        color: #fff;
        background-color: #55D7DF;
        border: none;
        border-radius: 5px;
    }
</style>