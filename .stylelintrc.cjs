module.exports = {
    plugins: ["stylelint-less"],
    // 继承一系列规则集合
    extends: [
        // standard 规则集合
        "stylelint-config-standard",
        // 样式属性顺序规则
        "stylelint-config-recess-order",
    ],
    rules: {
        "selector-class-pattern": "^([a-z][a-z0-9]*)((_|-)[a-z0-9]+)*$",
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global"],
            },
        ],
    },
};
