<template>
    <div>
        <mt-header fixed :title='$t("message.addWallet.header[0]")'>
            <router-link to="/choice" slot="left">
                <mt-button>&lt;</mt-button>
            </router-link>
            <mt-button slot="right" @click="goWell">{{$t("message.addWallet.header[1]")}}</mt-button>
        </mt-header>
        <div class="modifyBi">
            <mt-field :label='$t("message.addWallet.form.coinType")' placeholder="" v-model="biname"></mt-field>
            <mt-cell class="myMtCell" :class="A0" :title='$t("message.addWallet.form.color")' to="/color" is-link value="Aa">
            </mt-cell>
        </div>
        <p class="importMy">{{$t("message.addWallet.ImportBackup")}}</p>
    </div>
</template>
<script>
    import {
        Header,
        Cell
    } from 'mint-ui';
    export default {
        data() {
            return {
                biname: localStorage.getItem('biname'),
                A0: this.$route.query.className?"A"+this.$route.query.className:"A0"
            }
        },
        methods: {
            goWell() {
                this.$router.push({
                    path: "/wallet"
                })
            },
            addNewWallet() {
                this.$router.push({
                    path: "/addwallet"
                })
            }
        }
    }
</script>
<style lang="scss">
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
    .mint-cell-text {
        color: #606060;
    }
    .myMtCell {
        .mint-cell-value {
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            height: 1rem;
            margin-right: 3rem;
        }
    }
    .modifyBi {
        margin-top: 3rem;
        input {
            border: none !important;
            padding: 0 !important;
        }
        a:nth-child(1) {
            .mint-cell-wrapper {
                display: flex !important;
                flex-direction: column;
                .mint-cell-title {
                    width: 100% !important;
                    text-align: left !important;
                    margin-top: 1rem;
                }
                .mint-cell-value {
                    width: 100% !important;
                    text-align: left !important;
                }
            }
        }
    }
    .importMy {
        position: fixed;
        bottom: 2rem;
        text-align: center;
        width: 100%;
        font-size: 1.1rem;
        color: #54D4DC;
    }
    .A0 {
        .mint-cell-value {
            color: #43C5CF;
            background: #fff;
        }
    }
    .A1 {
        .mint-cell-value {
            color: #FF664C;
            background: #fff;
        }
    }
    .A2 {
        .mint-cell-value {
            color: #fff;
            background: #43C5CF;
        }
    }
    .A3 {
        .mint-cell-value {
            color: #fff;
            background: #288ADD;
        }
    }
    .A4 {
        .mint-cell-value {
            color: #fff;
            background: #FED265;
        }
    }
    .A5 {
        .mint-cell-value {
            color: #fff;
            background: #FF6C53;
        }
    }
    .A6 {
        .mint-cell-value {
            color: #F0C761;
            background: #30343D;
        }
    }
    .A7 {
        .mint-cell-value {
            color: #55D7E0;
            background: #30343D;
        }
    }
    .A8 {
        .mint-cell-value {
            color: #42D6DA;
            background: #EF4B88;
        }
    }
</style>