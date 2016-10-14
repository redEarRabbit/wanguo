/**
 * Created by Administrator on 2016/10/9.
 */
$(function () {
    //2.限时优惠需要做成切换效果，初始数据为2376，每隔30分钟在0-5之间随机递增。
    var appointmentNum = 2376;

    //1.数字动画
    function animNum() {
        //首屏数字动画
        var page01_num = [3, 1, 3, 2, 6, 9];
        for (var i = 0; i < 6; i++) {
            $(".site_page01_middle_l_num span:eq(" + i + ")").animateNumber({number: page01_num[i]});
        }

        //学员评价的数字动画
        $(".evaluate_title p span.stu_num01").animateNumber({number: 313269});

        //第四屏时的数字动画
        $(".site_page04_pass_bottom_r > p > strong").animateNumber({number: 2135});

        //表单数字动画
        $(".site_page09_r > form > p > strong").animateNumber({number: appointmentNum});
    }

    animNum();

    function tabText() {
        var flag = true;
        setInterval(function () {
            flag = !flag;
            var elem = $(".site_nav .container ul li.site_nav_discount a");
            if (!flag) {
                elem.html("已有" + appointmentNum + "人领取");
                $(".site_page09_r > form > p > strong").html(appointmentNum);
            } else {
                elem.html("限时优惠");
            }
        }, 2000);

        setInterval(function () {
            var tempNum = Math.floor(Math.random() * 6);
            appointmentNum += tempNum;
        }, 1800000);
    }

    tabText();

    //3.滚动页面动画
    function scrollThings() {
        var p2_top = $("#site_page02").offset().top;
        var p3_top = $("#site_page03").offset().top;
        var p7_top = $("#site_page07").offset().top;
        var p9_top = $("#site_page09").offset().top;
        var type_top = $("#class_type").offset().top;
        var p3_fam_top = $(".site_page03_famous").offset().top;
        var p4_pass_top = $(".site_page04_pass").offset().top;
        var p4_pass_b_top = $(".site_page04_pass_bottom").offset().top;
        var p4_pass_b_top2 = $(".site_page04_pass_bottom").offset().top - 300;
        var eva_top = $("#evaluate").offset().top - 300;
        var stateFlag = {"animNum1":"no","animNum2":"no","animNum3":"no","animNum4":"no"};

        $(window).on("scroll", function () {
            var elem = $(".site_page04_pass_middle .strong_content .strongFont .sure"),
                animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                loopTimer = null;

            //1.当滑动到第二屏时置顶漂浮的 导航变为置底漂浮
            if ($(this).scrollTop() >= p2_top) {
                $(".site_nav").css({"top": "100%", "marginTop": "-50px"});
            } else {
                $(".site_nav").css({"top": "0", "marginTop": "0"});
            }
            //2.当鼠标滑动第三屏时，先后依次出现：各项后面对号、右侧卡片、中间指示箭头
            if ($(this).scrollTop() >= p3_top && $(this).scrollTop() <= p3_fam_top) {
                $(".site_page03_progress_l ul:eq(0) li > s").addClass("animated fadeIn")
                    .one(animationEnd, function () {
                        $(".site_page03_progress_r li:eq(0)").addClass("animated fadeIn")
                            .one(animationEnd, function () {
                                $(".site_page03_progress_l .down_arrow:eq(0)").addClass("animated fadeIn")
                                    .one(animationEnd, function () {
                                        $(".site_page03_progress_l ul:eq(1) li > s").addClass("animated fadeIn")
                                            .one(animationEnd, function () {
                                                $(".site_page03_progress_r li:eq(1)").addClass("animated fadeIn")
                                                    .one(animationEnd, function () {
                                                        $(".site_page03_progress_l .down_arrow:eq(1)").addClass("animated fadeIn")
                                                            .one(animationEnd, function () {
                                                                $(".site_page03_progress_l ul:eq(2) li > s").addClass("animated fadeIn")
                                                                    .one(animationEnd, function () {
                                                                        $(".site_page03_progress_r li:eq(2)").addClass("animated fadeIn")
                                                                            .one(animationEnd, function () {
                                                                                $(".site_page03_progress_l .down_arrow:eq(2)").addClass("animated fadeIn")
                                                                                    .one(animationEnd, function () {
                                                                                        $(".site_page03_progress_l ul:eq(3) li > s").addClass("animated fadeIn")
                                                                                            .one(animationEnd, function () {
                                                                                                $(".site_page03_progress_r li:eq(3)").addClass("animated fadeIn");
                                                                                            });
                                                                                    })
                                                                            });
                                                                    });
                                                            })
                                                    });
                                            });
                                    })
                            });
                    });
            } else {
                $(".site_page03_progress_l ul li > s").removeClass("animated fadeIn");
                $(".site_page03_progress_r li").removeClass("animated fadeIn");
                $(".site_page03_progress_l .down_arrow").removeClass("animated fadeIn");
            }

            //5.鼠标滑动到该屏对号从左至右依次出现 循环
            function chooseState() {
                $(".site_page04_pass_middle .strong_content .strongFont:eq(0) .sure")
                    .addClass("animated fadeIn")
                    .one(animationEnd, function () {
                        $(this).parent().next().find(".sure")
                            .addClass("animated fadeIn")
                            .one(animationEnd, function () {
                                $(this).parent().next().find(".sure")
                                    .addClass("animated fadeIn")
                                    .one(animationEnd, function () {
                                        elem.removeClass("animated fadeIn");
                                    })
                            });
                    });
            }

            if ($(this).scrollTop() >= p4_pass_top && $(this).scrollTop() <= type_top) {
                chooseState();
                loopTimer = setInterval(function () {
                    chooseState()
                }, 3500);
            } else {
                clearInterval(loopTimer);
                elem.css("opacity", 0);
            }

            //首屏数字动画
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() <= p2_top && stateFlag.animNum1 === "no") {
                var page01_num = [3, 1, 3, 2, 6, 9];
                for (var i = 0; i < 6; i++) {
                    $(".site_page01_middle_l_num span:eq(" + i + ")").animateNumber({number: page01_num[i]});
                }
                stateFlag.animNum1 = "yes";
            }

            //6.滚动到第四屏时的数字动画
            var page04_num = 2135;
            if ($(this).scrollTop() >= p4_pass_b_top2 && $(this).scrollTop() <= type_top && stateFlag.animNum2 === "no") {
                $(".site_page04_pass_bottom_r > p > strong").animateNumber({number: page04_num});
                stateFlag.animNum2 = "yes";
            }
            if ($(this).scrollTop() >= eva_top && $(this).scrollTop() <= p7_top && stateFlag.animNum3 === "no") {
                //学员评价的数字动画
                $(".evaluate_title p span.stu_num01").animateNumber({number: 313269});
                var myChart = echarts.init(document.getElementById('evaluate_chart'));
                option = {
                    grid: {
                        left: '166px',
                        right: '120px',
                        bottom: '20px',
                        containLabel: false
                    },
                    xAxis: {
                        type: 'value',
                        axisLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {show: false}
                    },
                    yAxis: {
                        type: 'category',
                        axisLine: {show: false},
                        axisTick: {show: false},
                        // data: ['上课环境好', '答疑快', '性价比高', '名气大', '私教好', '老师牛', '通过率高'],
                        data: [
                            {
                                value: '上课环境好',
                                textStyle: {
                                    fontSize: '16'
                                }
                            },
                            {
                                value: '答疑快',
                                textStyle: {
                                    fontSize: '16'
                                }
                            },
                            {
                                value: '性价比高',
                                textStyle: {
                                    fontSize: '16'
                                }
                            },
                            {
                                value: '名气大',
                                textStyle: {
                                    fontSize: '16'
                                }
                            },
                            {
                                value: '私教好',
                                textStyle: {
                                    fontSize: '16'
                                }
                            },
                            {
                                value: '老师牛',
                                textStyle: {
                                    fontSize: '16'
                                }
                            },
                            {
                                value: '通过率高',
                                textStyle: {
                                    fontSize: '16'
                                }
                            }

                        ]
                    },
                    series: [
                        {
                            name: '赞同',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideLeft'
                                }
                            },

                            data: [279813, 301352, 299813, 308713, 312518, 310569, 312182]
                        },
                        {
                            name: '没赞同',
                            type: 'bar',
                            stack: '总量',
                            itemStyle: {
                                normal: {
                                    color: '#d4dee0'
                                }
                            },
                            data: [33456, 11917, 13456, 4556, 751, 2700, 1087]
                        },
                    ]
                };
                myChart.setOption(option);
                $(".evaluate_chart_percent li").animate({"opacity": 1}, 2000);
                stateFlag.animNum3 = "yes";
            }
            if ($(this).scrollTop() >= p9_top && stateFlag.animNum4 === "no") {
                //表单数字动画
                $(".site_page09_r > form > p > strong").animateNumber({number: appointmentNum});
                stateFlag.animNum4 = "yes";
            }
        });
    }

    scrollThings();

    /*$(".site_page03_progress_mask").mouseenter(function () {
        var index = $(this).index(),
            animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(".site_page03_progress_l ul:eq(" + index + ") li > s").addClass("animated fadeIn")
            .one(animationEnd, function () {
                $(".site_page03_progress_r li:eq(" + index + ")").addClass("animated fadeIn")
                    .one(animationEnd, function () {
                        $(".site_page03_progress_l .down_arrow:eq(" + index + ")").addClass("animated fadeIn")
                    })
            });
    });*/
    //4.site_page03_footer倒计时以2017年9月23日8：30为准
    function computeTime() {
        //现在的时间
        var date1 = +new Date();
        //结束时间
        var date2 = +new Date(2017, 8, 23, 8, 30);
        //剩余天数
        var date = Math.floor((date2 - date1) / 86400000);
        if (date <= 0) {
            return;
        }
        var htmlStr = "";
        //当是超过100时
        if ((date / 100) > 0) {
            htmlStr += "<span>" + Math.floor(date / 100) + "</span>";
            date = date % 100;
            htmlStr += "<span>" + Math.floor(date / 10) + "</span>";
            date = date % 10;
            htmlStr += "<span>" + Math.floor(date / 1) + "</span>";
            $(".site_page03_footer .yellow_font s").html(htmlStr);
        } else if ((date / 10) > 0) {   //当是超过10时
            htmlStr += "<span>" + Math.floor(date / 10) + "</span>";
            date = date % 10;
            htmlStr += "<span>" + Math.floor(date) + "</span>";
            $(".site_page03_footer .yellow_font s").html(htmlStr);
        } else { //当是个位数时
            htmlStr += "<span>" + Math.floor(date) + "</span>";
            $(".site_page03_footer .yellow_font s").html(htmlStr);
        }
    }

    computeTime();
    // 5.学习时长用户可填写1-24之间任意整数
    // 点击计算按钮弹出卡片提示时间不够，再咨询获取科学时间规划。
    function timeAsk() {
        $(".site_page03_footer .self_time .popup02 .close_btn").click(function () {
            $(this).parent().css("display", "none");
        });
        $(".site_page03_footer .self_time > .time_num").on("blur", function () {
            var learnTime = Math.floor(+$(this).val());
            if (learnTime < 1 || learnTime > 24) {
                $(".site_page03_footer .error_msg").css("display", "inline-block");
                $(".site_page03_footer .self_time > a").off("click");
                $(".site_page03_footer .self_time > a").click(function () {
                    $(".site_page03_footer .error_msg").fadeIn(3000, function () {
                        $(this).fadeOut(3000);
                    });
                    return false
                });
                $(".site_page03_footer .error_msg").fadeIn(3000, function () {
                    $(this).fadeOut(3000);
                });
            } else {
                $(".site_page03_footer .error_msg").css("display", "none");
                $(".site_page03_footer .self_time > a").off("click");
                $(".site_page03_footer .self_time a").click(function () {
                    $(".site_page03_footer .self_time .popup02").css("display", "block");
                    return false;
                });
            }
        });
        $(".site_page03_footer .self_time a").click(function () {
            $(".site_page03_footer .self_time .popup02").css("display", "block");
            return false;
        });
    }

    timeAsk();
    //4.左侧红色箭头上下浮动，提示有其余内容，该部分右侧截图处统一可点击链接至咨询（css3实现）

    //6.每点击一次 抢过关名额 下方数字增加1，起始数字为2135，滑动至该屏时，数字滚动效果同首屏
    var page04_num = 2135;
    $(".site_page04_pass_bottom_r > a").click(function () {
        $(".site_page04_pass_bottom_r > p > strong").html(++page04_num);
    });

    //7.右侧预约人数数据效果同首屏，用户可以提交个人信息，电话号码需做判断,提交后弹出成功提示。可自动发至指定邮箱，同时触发咨询。
    $(".site_page09_r > form .subForm").click(function () {
        var tel = +$(".site_page09_r > form .tel ").val();
        var user_name = $(".site_page09_r > form .user_name ").val();
        var testTel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (!testTel.test(tel)) {
            $(".site_page09_r > form .error_info").html("手机号码输入不正确！");
            return false;
        } else if (!user_name) {
            $(".site_page09_r > form .error_info").html("姓名不能为空！");
            return false;
        } else {
            $(".site_page09_r > form .popUp").css("display", "block");
        }
    });
})
