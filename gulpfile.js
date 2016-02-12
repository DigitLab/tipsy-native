var elixir = require('laravel-elixir');

// Setup elixir config
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(function(mix) {
    mix.styles('tipsy.css');
    mix.browserify('tipsy.js');
});