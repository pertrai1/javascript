// @ts-check

export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${
    age >= 50 ? 'old' : 'young'
  } fellow you are.`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}
  Class of ${year}`;
}

export function costOf(sign, currency = 'dollars') {
  const convertedSign = Number.parseFloat(sign.length);
  return `Your sign cost ${(convertedSign * 2 + 20).toFixed(2)} ${currency}`;
}
