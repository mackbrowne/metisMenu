var packageJson = JSON.parse(Npm.require("fs").readFileSync('bower.json'));

Package.describe({
  name: packageJson.name,
  summary: 'Adds the jQuery metisMenu to the project',
  version: '0.0.6',
  git: 'https://github.com/onokumus/metisMenu.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('jquery', "client", {weak: false});
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0', 'METEOR@1.2']);
  api.export('metismenu');
  api.addFiles([
    'bower_components/metisMenu/dist/metisMenu.js',
    'bower_components/metisMenu/dist/metisMenu.css'
  ]);
});

Package.onTest(function (api) {
  api.use(packageJson.name);
  api.use('tinytest');

  api.addFiles('metismenu-tests.js');
});