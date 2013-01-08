Package.describe({
  summary: "Validate jQuery"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('jquery.validate.js',
                'client');
});
