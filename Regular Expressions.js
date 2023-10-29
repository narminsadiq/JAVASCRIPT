let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
console.log(regEx);
const str = 'I love JavaScript'
const pattern2 = /love/
const result = pattern2.test(str)
console.log(result)
const str2 = 'I love JavaScript'
const pattern3 = /love/
const result2 = str.match(pattern3)
console.log(result2)
const txt = 'Python is the most beautiful language that a\
 human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
 