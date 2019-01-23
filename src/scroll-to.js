let animate = () => {};

if (typeof document !== 'undefined') {
  animate = require('animateplus').default;
}

const defaultOptions = {
  speed: 1.5,
  easing: 'out-quintic',
  offset: 0,
};

export default function scrollTo(el, options = {}) {
  const opts = {
    ...defaultOptions,
    ...options,
  };

  const root = document.scrollingElement;
  const from = root.scrollTop;
  const { top } = el.getBoundingClientRect();
  const to = top + opts.offset;

  return animate({
    easing: opts.easing,
    speed: opts.speed,
    change: progress => {
      root.scrollTop = from + progress * to
    },
  });
}
