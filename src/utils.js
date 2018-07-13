import tinytime from 'tinytime';

export default {
  formatPostTimestamp: tinytime('{MMMM} {DD}, {YYYY}').render,
};
