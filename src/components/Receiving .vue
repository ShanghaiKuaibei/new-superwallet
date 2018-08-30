<template>
    <div class="receBox">
        <div class="receive clearfix">
            <mt-header :title="msg.name">
                <router-link to="/wallet" slot="left">
                    <mt-button>&lt;</mt-button>
                </router-link>
                <mt-button icon="more" slot="right" @click="goColor"></mt-button>
            </mt-header>
            <div class="whichBi">
                <span>{{msg.name}}</span>
                <h2>{{msg.bmoney}}</h2>
                <span>&yen; {{msg.rmoney}}</span>
            </div>
        </div>
        <ul class="receul">
            <li @click="send"><span class="fa fa-paper-plane-o"></span>{{$t("message.receiving.Send")}}</li>
            <li @click="receive"><span class="fa fa-qrcode"></span>{{$t("message.receiving.Receive")}}</li>
        </ul>
        <button>{{$t("message.receiving.DeleteWallet")}}</button>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">{{$t("message.receiving.TransactionRecords")}}</mt-tab-item>
            <mt-tab-item id="2">{{$t("message.receiving.Address")}}</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                1
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                2
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    import {
        Header,
        Cell,
        Navbar,
        TabItem
    } from 'mint-ui';
    export default {
        data() {
            return {
                selected: "1",
                msg:JSON.parse(localStorage.getItem('btext')),
            }
        },
        methods: {
            goColor() {
                const that=this;
                this.$router.push({
                    path: '/color',
                    query: {
                        url: that.$route
                    }
                })
            },
            send() {
                this.$router.push({
                    path: '/send'
                })
            },
            receive() {
                this.$router.push({
                    path: '/receivebi'
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
    .receBox>button {
        width: 12rem;
        height: 2rem;
        display: block;
        margin: 1rem auto;
        font-size: 1.2rem;
        color: #fff;
        background-color: #55D7DF;
        border: none;
        border-radius: 5px;
        line-height: 1rem;
    }
    .receBox {
        background-color: #F7F7F7;
        height: 100vh;
        .mint-navbar {
            width: 100vw;
        }
        .mint-navbar .mint-tab-item {
            width: 50%;
            color: #000;
        }
        .mint-navbar .mint-tab-item.is-selected {
            border-bottom: 3px solid #55D7DF !important;
            color: #55D7DF !important;
        }
    }
    .receive {
        background: #55D7DF;
        .mint-header-title {
            color: #fff !important;
        }
        .mint-header {
            height: 3rem;
            background-color: transparent;
            border: none;
        }
        .mint-header .mint-header-button.is-left {
            color: #fff !important;
        }
        .mint-header .mint-header-button.is-right {
            color: #fff !important;
        }
        .mint-header .mint-button {
            font-size: 1.5rem;
        }
        .mint-header-title {
            font-size: 1rem;
        }
        .whichBi {
            text-align: center;
            padding-bottom: 1rem;
            span:nth-child(1) {
                color: #fff;
                display: inline-block;
                padding: 0.2rem 0.3rem;
                border: 1px solid #fff;
                border-radius: 5px;
                font-size: 1rem;
            }
            h2 {
                color: #fff;
                font-weight: 500;
                margin: 0.3rem 0 0.4rem 0;
            }
        }
    }
    .receul {
        display: flex;
        background-color: #fff;
        padding: 1rem 0;
        box-shadow: 0 0 2px 2px #ccc;
        li {
            width: 50%;
            text-align: center;
            .fa-qrcode:before {
                display: inline-block;
                width: 1.1rem;
                height: 1.1rem;
                font-size: 1rem;
            }
            span {
                color: #54D4DC;
                display: inline-block;
                width: 1rem;
                height: 1rem;
                margin: auto;
                margin-right: 0.3rem;
                font-size: 1rem !important;
            }
        }
        li:nth-child(1) {
            border-right: 1px solid #ccc;
        }
    }
</style>