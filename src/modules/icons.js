export function getIconSource(name) {
  const importAll = (require) =>
    require.keys().reduce((acc, next) => {
      acc[next.replace('./', '')] = require(next);
      return acc;
    }, {});

  const images = importAll(
    require.context('../img/2nd Set - Color/', false, /\.(png|jpe?g|svg)$/)
  );
  return images[`${name}.svg`];
}
