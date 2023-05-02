export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions', // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    // rem适配
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿宽度的1/ 10
      propList: ['*', '!border'], // 除 border 外所有px 转 rem
      selectorBlackList: ['.el-'], // 过滤掉.el-开头的class，不进行rem转换
      exclude: /[\\/]src[\\/](components|pages)[\\/]pc/,
    },
    // vw适配
    // 'postcss-px-to-viewport': {
    //     viewportWidth: 375, // 设计稿的视口宽度
    //     unitPrecision: 5, // 小数点保留位数
    //     viewportUnit: 'vw', // 要转换成的视口单位
    //     selectorBlackList: [], // 不进行转换的选择器列表
    //     minPixelValue: 1, // 小于或等于此值的像素单位不转换
    //     mediaQuery: false // 是否转换媒体查询中的像素单位
    // }
  },
};
