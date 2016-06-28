exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/protractor.spec.js'],
  useAllAngular2AppRoots: true
};
