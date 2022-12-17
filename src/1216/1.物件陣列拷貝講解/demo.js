const aa = [{ a: 1 }, { b: 2 }]

const ab = [...aa]

aa[0] === ab[0]
// true
ab

const ac = aa.map((v) => {
  return { ...v }
})

ac

ac[0] === aa[0] //false
