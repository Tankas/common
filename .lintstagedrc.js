module.exports = {
  '**/*.less': 'stylelint --syntax less',
  '**/*.{js,jsx,ts,tsx}': 'npm run lint-staged:js',
  '**/*.{js,jsx,tsx,ts,md,json}': ['prettier --write'],
  '*.{png,jpeg,jpg,gif,svg}': 'imagemin-lint-staged',
};
