module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      sass: {
        // para todas as tags style, serão importados os arquivos abaixo
        additionalData: `
        @import "@/styles/functions";
        @import '@/styles/colors/index.scss';
        @import '@/styles/variables/index.scss';
        `,
      },
    },
  },
};
