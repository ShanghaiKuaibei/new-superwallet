<template>
    <div class="locker">
        <div class="mui-content mycontent">
            <div id='alert'>{{first?$t("message.locker.firstMsg1"):$t("message.locker.notFirst1")}}</div>
            <span>{{first?$t("message.locker.firstMsg"):''}}</span>
            <div id='holder' class="mui-locker" data-locker-options='{"ringColor":"#fff","fillColor":"#ffffff","pointColor":"#54D4DC","lineColor":"#54D4DC","lineWidth":"10px"}' data-locker-width='300' data-locker-height='300' @click="done"></div>
        </div>
        <p @click="goFirst"> {{!first?$t("message.locker.resetBtn"):''}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                first: true,
                num: '0123',
            }
        },
        mounted() {
            this.done()
        },
        watch: {},
        methods: {
            goFirst() {
                this.first = true;
                this.done();
            },
            done() {
                const that = this;
                //处理事件
                if (that.first) {
                    var holder = document.querySelector('#holder'),
                        alert = document.querySelector('#alert'),
                        record = [];
                    holder.addEventListener('done', function(event) {
                        var rs = event.detail;
                        // if (rs.points.length < 4) {
                        //     alert.innerText = '设定的手势太简单了';
                        //     record = [];
                        //     rs.sender.clear();
                        //     return;
                        // }
                        record.push(rs.points.join(''));
                        if (record.length >= 3) {
                            if (record[0] == record[1] && record[1] == record[2]) {
                                that.$router.push({
                                    path: "/wallet"
                                })
                            }
                            record = [];
                        } else if (record.length >= 2) {
                            if (record[0] == record[1]) {
                                alert.innerText = this.$t("message.locker.firstMsg3");
                            } else {
                                alert.innerText = this.$t("message.locker.firstErro");
                            }
                            rs.sender.clear();
                        } else {
                            alert.innerText = this.$t("message.locker.firstMsg2");
                            rs.sender.clear();
                        }
                    });
                } else {
                    var holder = document.querySelector('#holder'),
                        alert = document.querySelector('#alert'),
                        record = [];
                    holder.addEventListener('done', function(event) {
                        var rs = event.detail;
                        // if (rs.points.length < 4) {
                        //     alert.innerText = '设定的手势太简单了';
                        //     record = [];
                        //     rs.sender.clear();
                        //     return;
                        // }
                        console.log(rs.points.join(''));
                        record.push(rs.points.join(''));
                        if (record.length > 0) {
                            if (record[0] == that.num) {
                                that.$router.push({
                                    path: "/wallet"
                                })
                                record = [];
                            } else {
                                alert.innerText = this.$t("message.locker.notFirst2");
                                rs.sender.clear();
                            }
                            record = [];
                        }
                    });
                }
            },
        }
    }
</script>
<style lang="scss">
    .locker {
        width: 100vw;
        height: 85vh;
        background: url("../../static/img/bg.png") no-repeat;
        color: #fff;
        text-align: center;
        padding-top: 15vh;
        span {
            margin: 1rem 0;
            display: block;
        }
    }
    #holder {
        width: 300px;
        height: 300px;
        margin: 0rem auto;
    }
    #alert {
        text-align: center;
        padding: 0;
        font-size: 1.1rem;
    }
    .mycontent{
        background-color:transparent !important;
    }
    .mui-locker-holder canvas {
        width: 100%;
        height: 100%;
    }
</style>