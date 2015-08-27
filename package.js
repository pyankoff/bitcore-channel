Package.describe({
  name: 'pyankoff:bitcore-channel',
  version: '1.0.0',
  summary: 'Payment channels smart contract support for bitcore.',
  git: 'https://github.com/pyankoff/meteor-packages.git'
});

Npm.depends({'bitcore-channel': '0.12.0'});

Package.onUse(function(api) {
  api.export('bitcore-channel');
  api.addFiles('bitcore-channel.js', 'server');
});
