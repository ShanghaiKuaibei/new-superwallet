<template>
    <div class="addBox">
        <mt-header fixed :title="$t('message.choice.header[1]')">
            <router-link to="/importbi" slot="left">
                <mt-button>{{$t("message.choice.header[0]")}}</mt-button>
            </router-link>
            <mt-button slot="right" @click="goWell">X</mt-button>
        </mt-header>
        <ul class="allBi clearfix">
            <li v-for="(item,i) in biMsg" :key="i" @click="addNewWallet(item.msg)">
                <img :src="item.url" alt="">
                <p>{{item.msg}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import {
        Header
    } from 'mint-ui';
    export default {
        data() {
            return {
                biMsg: [{
                        url: "../../static/img/BTC.png",
                        msg: "BTC " + this.$t("message.choice.allBi[0]")
                    }, {
                        url: "../../static/img/SKY.png",
                        msg: "SKY " + this.$t("message.choice.allBi[1]")
                    },
                    {
                        url: "../../static/img/SC2.png",
                        msg: "SC2 " + this.$t("message.choice.allBi[2]")
                    },
                    {
                        url: "../../static/img/MZC.png",
                        msg: "MZC " + this.$t("message.choice.allBi[3]")
                    },
                    {
                        url: "../../static/img/SUN.png",
                        msg: "SUN " + this.$t("message.choice.allBi[4]")
                    },
                    {
                        url: "../../static/img/ARC.png",
                        msg: "ARC " + this.$t("message.choice.allBi[5]")
                    },
                    {
                        url: "",
                        msg: "LFC " + this.$t("message.choice.allBi[6]")
                    },
                    {
                        url: "",
                        msg: "MTC " + this.$t("message.choice.allBi[7]")
                    },
                ]
            }
        },
        methods: {
            goWell() {
                this.$router.push({
                    path: "/wallet"
                })
            },
            addNewWallet(msg) {
                const that = this;
                localStorage.setItem('biname', msg.split(" ")[1]);
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
    .addBox {
        .mint-header {
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            height: 3rem !important;
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
        }
        .allBi {
            width: 100%;
            background: #F5F5F5;
            margin-top: 2.4rem;
            li {
                background-color: #fff;
                border-radius: 15px;
                width: 45%;
                margin-left: 0.8rem;
                margin-top: 0.8rem;
                float: left;
                text-align: center;
                padding-bottom: 0.8rem;
                img {
                    width: 7rem;
                    height: auto;
                    display: block;
                    margin: 1rem auto;
                }
                p {
                    font-weight: 500;
                    font-size: 0.9rem;
                    color: #000;
                }
            }
        }
    }
</style>