<template>
    <div class="sendBox">
        <mt-header fixed :title='$t("message.receivebi.header")'>
            <mt-button slot="left" @click="goBack">&lt;</mt-button>
        </mt-header>
        <div class="erimg">
            <div class="header">
                <p>{{btext.name}}</p>
                <span>{{btext.name}}</span>
            </div>
            <div class="qr">
                <qriously :value="initQCode" :size="220" />
            </div>
            <div class="footer">
                <p>{{btext.address}}</p>
                <span class="copyBtn" :data-clipboard-text="initQCode" @click="showAlter"><span class="fa fa-clone"></span>{{$t("message.receivebi.copyaddress")}}</span>
            </div>
            <span class="upload mui-icon mui-icon-upload"></span>
        </div>
    </div>
</template>
<script>
    import {
        Header,
        Cell,
        Field,
        MessageBox
    } from 'mint-ui';
    import Clipboard from 'clipboard'
    let clipboard = new Clipboard('.copyBtn')
    export default {
        data() {
            return {
                initQCode: '',
                btext: JSON.parse(localStorage.getItem('btext'))
            }
        },
        created() {
            this.initQCode = this.btext.address;
        },
        mounted() {},
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            showAlter() {
                MessageBox({
                    title: this.$t("message.receivebi.alertBox.title"),
                    message: this.$t("message.receivebi.alertBox.msg"),
                });
            }
        }
    }
</script>
<style lang="scss">
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
    .sendBox {
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
    }
    .erimg {
        margin-top: 5rem;
        width: 92%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 5px 2px #ccc;
        padding-bottom: 1rem;
        .header {
            height: 3rem;
            padding: 1rem 0;
            background: #54D4DC;
            text-align: center;
            color: #fff;
            border-radius: 10px 10px 0 0;
            p {
                font-size: 1rem;
                color: #fff;
                margin: 0;
            }
            span {
                font-size: 0.85rem;
                border: 1px solid #fff;
                border-radius: 5px;
                display: inline-block;
                padding: 0.1rem 0.3rem;
                margin-top: 0.1rem;
            }
        }
        .qr {
            padding: 2.5rem 2rem;
            div {
                width: 80%;
                margin: 0 auto;
            }
        }
        .footer {
            text-align: center;
            p {
                font-size: 1rem;
                margin: 0;
            }
            span {
                font-size: 0.9rem;
            }
        }
        .upload {
            display: block;
            width: 100%;
            text-align: center;
            color: #54D4DC;
            margin-top: 1.2rem;
        }
    }
</style>