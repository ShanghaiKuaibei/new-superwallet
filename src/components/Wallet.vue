<template>
    <div class="wallet">
        <img src="../../static/img/tou.png" @click="showVersion" alt="">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">{{$t("message.wallet.tab[0]")}}</mt-tab-item>
            <mt-tab-item id="2">{{$t("message.wallet.tab[1]")}}</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="all">
                    <p>{{$t("message.wallet.allMoney")}}&nbsp;CNY</p>
                    <h1>0.00</h1>
                </div>
                <ul class="chosebi">
                    <li v-for="(item,i) in allMsg" :key="i" :class="item.className" v-dragging="{ item: item, list: allMsg, group: 'item'}">
                        <div @click="goDetail(item)"><span>{{item.name}}</span>
                            <h2>{{item.bmoney}}</h2><span>&yen;{{item.rmoney}}</span></div>
                        <div @click="goBackUp(item)"><span class="fa fa-qrcode"></span></div>
                    </li>
                </ul>
                <span class="add" @click="goChosebi">+</span>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul>
                    <li v-for="item in url" @click="showAlert"><img :src="item" alt=""></li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 添加按钮 -->
    </div>
</template>

<script>
    import {
        Navbar,
        TabItem,
        MessageBox
    } from 'mint-ui';
    export default {
        data() {
            return {
                selected: "1",
                url: ["../../static/img/fx-1.png", "../../static/img/fx-2.png", "../../static/img/fx-3.png", "../../static/img/fx-4.png"],
                allMsg: [{
                    "name": "喵爪币",
                    "bmoney": "0.0000 MZC",
                    "rmoney": "0.00",
                    "className": "A0",
                    "address": "12345",
                    "id": "0"
                }, {
                    "name": "天空币",
                    "bmoney": "1.0000 MZC",
                    "rmoney": "0.00",
                    "className": "A2",
                    "address": "abgidedce",
                    "id": "1"
                }, {
                    "name": "比特币",
                    "bmoney": "2.0000 MZC",
                    "rmoney": "0.00",
                    "className": "A5",
                    "address": "1dcbeuc5",
                    "id": "2"
                }, {
                    "name": "小贝壳",
                    "bmoney": "3.0000 MZC",
                    "rmoney": "0.00",
                    "className": "A6",
                    "address": "12decdcd5",
                    "id": "3"
                }],
            }
        },
        mounted() {
            this.$dragging.$on('dragged', ({
                value
            }) => {
                // this.allMsg = [...value.list];
                // console.log(this.allMsg)
            })
        },
        methods: {
            showAlert() {
                MessageBox({
                    title: 'Alert',
                    message: this.$t("message.wallet.alertBox2"),
                    confirmButtonText: this.$t("message.backups.msgBox.btnMsg")
                });
            },
            showVersion() {
                MessageBox({
                    title: 'Alert',
                    message: this.$t("message.wallet.alertBox1") + '1.1.7',
                    confirmButtonText: this.$t("message.backups.msgBox.btnMsg")
                });
            },
            goChosebi() {
                this.$router.push({
                    path: "/choice"
                })
            },
            goDetail(text) {
                localStorage.setItem('btext', JSON.stringify(text));
                this.$router.push({
                    path: "/receiving",
                })
            },
            goBackUp(text) {
                localStorage.setItem('btext', JSON.stringify(text));
                this.$router.push({
                    path: "/backups"
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .wallet>img {
        margin: 0.5rem;
    }
    .wallet {
        width: 100%;
        height: 100vh;
        background: url("../../static/img/bg.png") no-repeat;
        .all {
            color: #fff;
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
            p {
                color: #fff;
            }
            h1 {
                font-size: 2.2rem;
                margin-top: 0.5rem;
                font-weight: 400;
            }
        }
        .chosebi {
            height: 66vh;
            overflow: scroll;
            li>div:nth-child(1) {
                float: left;
                margin: 1rem;
                span {
                    font-size: 0.9rem;
                }
                h2 {
                    margin: 0.5rem 0 0.2rem 0;
                    font-weight: 400;
                    font-size: 1.4rem;
                }
            }
            li>div:nth-child(2) {
                float: right;
                margin: 1rem;
                width: 2rem;
                height: 2rem;
                margin-top: 2rem;
                span {
                    display: block;
                    width: 100%;
                    height: 100%;
                    font-size: 2rem;
                }
            }
            li {
                height: 6.5rem !important;
                border-radius: 10px;
                margin-bottom: 0.8rem;
            }
        }
        .add {
            display: block;
            width: 4rem;
            height: 4rem;
            border-radius: 4rem;
            font-size: 4rem;
            color: #4AC3D6;
            background: #fff;
            text-align: center;
            line-height: 3.5rem;
            position: fixed;
            bottom: 1rem;
            left: 50%;
            margin-left: -2rem;
        }
    }
    .mint-tab-container {
        width: 90% !important;
        margin: 0 auto;
        img {
            display: block;
            width: 100%;
            height: auto;
            margin-top: 1rem;
        }
    }
    .mint-navbar {
        width: 10rem !important;
        margin: 0 auto !important;
        display: flex !important;
        background-color: transparent !important;
        margin-top: -2rem !important;
        .mint-tab-item {
            color: #EBE9E9;
            width: 50%;
            text-align: center;
            background-size: contain;
        }
    }
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 3px solid #fff;
        color: #fff;
        margin-bottom: -3px;
    }
    .mint-tabbar>.mint-tab-item.is-selected {
        background-color: #fff;
        color: #fff;
    }
    .A0 {
        color: #43C5CF;
        background: #fff;
    }
    .A1 {
        color: #FF664C;
        background: #fff;
    }
    .A2 {
        color: #fff;
        background: #43C5CF;
    }
    .A3 {
        color: #fff;
        background: #288ADD;
    }
    .A4 {
        color: #fff;
        background: #FED265;
    }
    .A5 {
        color: #fff;
        background: #FF6C53;
    }
    .A6 {
        color: #F0C761;
        background: #30343D;
    }
    .A7 {
        color: #55D7E0;
        background: #30343D;
    }
    .A8 {
        color: #42D6DA;
        background: #EF4B88;
    }
</style>