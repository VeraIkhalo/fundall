module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `
          @import "@/styles/abstracts/_variables.scss";
          @import "@/styles/base/_typography.scss";
          
          `
        }
      }
    }
  }