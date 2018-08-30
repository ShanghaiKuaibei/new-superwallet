<template>
    <div class="sendBox">
        <mt-header fixed :title='$t("message.backups.header")'>
            <mt-button slot="left" @click="goBack">&lt;</mt-button>
        </mt-header>
        <div class="erimg">
            <div class="header">
                <p>{{initQCode}}</p>
            </div>
            <div class="qr">
                <qriously :value="initQCode" :size="220" />
            </div>
            <div class="footer">
                <span class="copyBtn" :data-clipboard-text="initQCode" @click="showAlter"><span class="fa fa-clone"></span>{{$t("message.backups.copyseed")}}</span>
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
                initQCode: JSON.parse(localStorage.getItem('btext')).address
            }
        },
        mounted() {},
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            showAlter() {
                MessageBox({
                    title: this.$t("message.backups.msgBox.title"),
                    message: this.$t("message.backups.msgBox.msg"),
                    confirmButtonText:this.$t("message.backups.msgBox.btnMsg")
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
            span {
                font-size: 1rem;
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