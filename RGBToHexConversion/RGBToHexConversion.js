function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  return `0${Number(d).toString(16)}`.slice(-2).toUpperCase();
}
