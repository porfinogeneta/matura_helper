module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/base.scss";`
            }
        }
    },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/matura_helper/'
    : '/'
}