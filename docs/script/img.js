export function image(tag) {
  return {
    path: () => "images/" + tag[0].toUpperCase() + "/" + tag + ".png"
  };
}

export function icon(tag) {
  return {
    path: () => "images/Icon/" + tag + ".png"
  };
}
