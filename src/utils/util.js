// 封装深拷贝

const copyType = (data) => {
  const str = Object.prototype.toString.call(data)
  const typeTesting = {
    '[Object Object]': 'object',
    '[Object Array]': 'array',
    '[Object Function]': 'function',
    '[Object Number]': 'number',
    '[Object String]': 'string',
    '[Object Boolean]': 'boolean',
    '[Object Undefined]': 'undefined',
    '[Object Null]': 'null',
    '[Object RegExp]': 'regExp',
    '[Object Date]': 'date'
  }
  return typeTesting[str]
}

// 递归自己
const typeData = (data) => {
  const str = copyType(data)
  let obj = null
  if (str === 'array') {
    obj = []
    for (let i = 0; i < data.length; i++) {
      obj.push = typeData(data[i])
    }
  } else if (str === 'object') {
    obj = {}
    for (const i in data) {
      obj[i] = typeData(obj[i])
    }
  } else {
    return data
  }
  return obj
}

export default {
  typeData
}
