Package.describe({
  name: 'pyankoff:bitcore-channel',
  version: '1.0.3',
  summary: 'Payment channels smart contract support for bitcore.',
  git: 'https://github.com/pyankoff/meteor-packages.git',
  documentation: 'README.md'
});

Npm.depends({'bitcore-channel': '0.12.8'});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.export('bitcore-channel');
  api.addFiles('bitcore-channel.js', 'server');
});
