module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      sass: {
        // para todoa tag style serão importados os arquivos abaixo
        additionalData: `
        @import "@/styles/funtions";
        @import "@/styles/colors";
        `,
      },
    },
  },
};
