export function checkPhone (phone) {
  return (/^1[34578]\d{9}$/.test(phone))
}
