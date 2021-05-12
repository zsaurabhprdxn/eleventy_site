
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('assets');

    return {
        passthroughFileCopy: true,
        markdownTemplateEngines: 'njk',
        templateFormats: ['html','njk','md'],
        dir: {
            input:'src',
            output:'_site',
            includes: 'includes'
        }
    }
}