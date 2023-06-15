let mix = require('laravel-mix');

mix.js('resources/js/custom-script.js', 'public/app.js').vue();

mix.combine([
    'node_modules/primevue/resources/primevue.min.css',
    'node_modules/primevue/resources/themes/saga-blue/theme.css',
    'node_modules/primeflex/primeflex.css',
    'resources/css/custom-style.css',
], 'public/prime-asset.css');