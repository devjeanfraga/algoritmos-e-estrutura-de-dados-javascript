function collectString (obj) {
  var stringArr = []
  function gatherString (o) {
      for (let key in o ) {
          if (typeof o[key] === 'string' ) {
              stringArr.push(o[key])
          } else if (typeof o[key] === 'object') {
              return gatherString(o[key])
          }
      }
  }
  gatherString(obj)
  //console.log(stringArr)
  return stringArr
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectString(obj)