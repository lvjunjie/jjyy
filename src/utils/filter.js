export function translateSex (type) {
  let sex = type
  switch (type) {
    case 0:
      sex = '男'
      break

    case 1:
      sex = '女'
      break
  }
  return sex
}
