const mobileReg = /[\\/]src[\\/](components|pages)[\\/]mobile/;
const selectorBlackList = ['.nxg-'];

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
    // rem适配 H5
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿宽度的1/ 10
      propList: ['*', '!border'], // 除 border 外所有px 转 rem
      selectorBlackList: selectorBlackList, // 过滤掉.nxg-开头的class，不进行rem转换
      include: [mobileReg],
    },
    // vw适配 PC适配
    'postcss-px-to-viewport': {
      viewportWidth: 1920, // 设计稿的视口宽度
      unitPrecision: 5, // 小数点保留位数
      viewportUnit: 'vw', // 要转换成的视口单位
      exclude: [mobileReg, /node_modules/],
      selectorBlackList: selectorBlackList, // 不进行转换的选择器列表
      minPixelValue: 1, // 小于或等于此值的像素单位不转换
      mediaQuery: true, // 是否转换媒体查询中的像素单位
    },
  },
};
