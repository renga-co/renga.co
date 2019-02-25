import tinytime from 'tinytime';

export default {
  formatPostTimestamp: tinytime('{MMMM} {DD}, {YYYY}').render,
  toCamelCase: str =>
    str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()),
};
