exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/todomvc.spec.js'],
  useAllAngular2AppRoots: true
};
