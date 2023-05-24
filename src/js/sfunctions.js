export function orderByProps(obj, order) {
  const propsArray = [];

  for (const prop in obj) {
    if (prop in obj) {
      propsArray.push({ key: prop, value: obj[prop] });
    }
  }

  propsArray.sort((a, b) => a.key.localeCompare(b.key));

  order.reverse().forEach((element) => {
    for (let i = 0; i < propsArray.length; i += 1) {
      if (propsArray[i].key === element) {
        const tmp = propsArray[i];
        propsArray.splice(i, 1);
        propsArray.unshift(tmp);
        break;
      }
    }
  });

  return propsArray;
}

export function getSpecialAttack(obj) {
  const { _special } = obj;
  const tmp = JSON.parse(JSON.stringify(_special));
  tmp.forEach((element) => {
    if (!('description' in element)) {
      const el = element;
      el.description = 'Описание недоступно';
    }
  });

  return tmp;
}
