import { translationTag, translationUI } from "../lang/lang.js";

export function alpha(a, b) {
  if (Array.isArray(a)) {
    return translationTag[a[0]].name.localeCompare(translationTag[b[0]].name)
  }
  return translationTag[a].name.localeCompare(translationTag[b].name)
}

export function menuOrder(a, b) {
  if (a[1].menuOrder == b[1].menuOrder) {
    return alpha(a, b);
  }
  return a[1].menuOrder - b[1].menuOrder;
}