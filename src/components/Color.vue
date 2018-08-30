<template>
    <div>
        <mt-header fixed :title='$t("message.color.ColorSetting")'>
            <mt-button slot="left" @click="goBack">&lt;</mt-button>
        </mt-header>
        <div class="choiceColor">
            <ul class="mui-table-view mui-table-view-radio">
                <li class="mui-table-view-cell" :class="index==i?`mui-selected`:''" v-for="(item,i) in 9" :key="i" @click="chioceColor(i)">
                    <a class="mui-navigate-right">
                        <span :class="'A'+i">Aa</span>
                    </a>
                </li>
            </ul>
        </div>
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
                index: 0,
            }
        },
        methods: {
            goBack() {
                const that = this;
                if (!that.$route.query.url) {
                    that.$router.push({
                        path: '/addwallet',
                        query: {
                            className: that.index
                        }
                    })
                }else{
                    that.$router.go(-1)
                }
            },
            chioceColor(index) {
                console.log(this.$route)
                this.index = index
            }
        }
    }
</script>
<style lang="scss">
    @import '../../static/lib/mui/css/mui.min.css';
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
    .mint-radio-input:checked+.mint-radio-core {
        background-color: #4DC7D3;
        border-color: #4DC7D3;
    }
    .choiceColor {
        margin-top: 3rem;
        span {
            width: 3rem;
            height: 1.8rem;
            line-height: 1.8rem;
            text-align: center;
            display: inline-block;
            border-radius: 15px;
            box-shadow: 0 0 1px 1px #ccc;
            font-size: 1.3rem;
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
    }
</style>