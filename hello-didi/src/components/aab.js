// 注册一个全局自定义指令 `v-pages`
Vue.directive("pages", {
    // 只调用一次，指令第一次绑定到元素时调用。
    bind: function (el, binding, vnode) {
        var s = JSON.stringify;
        console.log("name: " + s(binding.name));
        console.log("value: ", binding.value.cb);
        console.log("expression: " + s(binding.expression));
        console.log("argument: " + s(binding.arg));
        console.log("modifiers: " + s(binding.modifiers));
        console.log("vnode keys: " + Object.keys(vnode).join(", "));

        el.innerHTML = `
            <div class="holder">
                <div class="ht-page"></div>
                <div class="pk-bet-select">
                    <select id="pk_bet_pagef" class="form-control selectpicker" placeholder="--" data-live-search="true"></select>
                </div>
            </div>
        `;
        // 获取组件内的 pk_bet_pagef 值
        // this.pageSizes = binding.value.pageSizes;

    },
    //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted: function (el, binding, vnode) {
        //分页
        ~function perPage() {
            var data = [
                {
                    key: "20",
                    value: "20条/每页"
                },
                {
                    key: "50",
                    value: "50条/每页"
                },
                {
                    key: "100",
                    value: "100条/每页"
                }
            ];
            var options = [];
            data.forEach(function (item, index) {
                var option =
                    '<option value="' + item.key + '">' + item.value + "</option>";
                options.push(option);
            });
            $("#pk_bet_pagef")[0].innerHTML = options.join("");
            $("#pk_bet_pagef").selectpicker("refresh");
        }();


    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated: function (el, binding, vnode) {
        // console.log($(el).children().children().children("#pk_bet_pagef").val(), 'aabb');
        console.log(binding.value.pageSizes, "pk_bet_page");
    }
});
Vue.component("vm-page", {
    props: {
        isShow: {
            type: Boolean,
            default: true
        },
        isReset: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        pageSizes: {
            handler(val) {
                console.log(val * 1, "pageSizes");
                this.$emit("for-pages", val * 1);
            },
            immediate: true
        },
        isReset: {
            handler(val) {
                if (val) this.pageSizes = 20
                console.log(val, "isReset");
            },
            immediate: true
        }
    },
    computed: {
        vpages() {
            return {
                isShow: this.isShow,
                isReset: this.isReset,
            };
        }
    },
    mounted() {
        this.perPage();
    },
    data() {
        return {
            pageSizes: 20
        };
    },
    methods: {
        perPage() {
            var data = [
                {
                    key: "20",
                    value: "20条/每页"
                },
                {
                    key: "50",
                    value: "50条/每页"
                },
                {
                    key: "100",
                    value: "100条/每页"
                }
            ];
            var options = [];
            data.forEach(function (item, index) {
                var option =
                    '<option value="' + item.key + '">' + item.value + "</option>";
                options.push(option);
            });
            $("#pk_bet_pages")[0].innerHTML = options.join("");
            $("#pk_bet_pages").selectpicker("refresh");
        }
    },
    componentUpdated() {
        console.log("componentUpdated");
    },
    template: `
        <div class="holder" v-show="vpages.isShow">
            <div class="ht-page"></div>
            <div class="pk-bet-select">
                <select id="pk_bet_pages" class="form-control selectpicker" v-model="pageSizes" placeholder="--"
                    data-live-search="true"></select>
            </div>
        </div>
    `
});
