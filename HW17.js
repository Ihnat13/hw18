
 const rexegp = /^\s*[+-]?0*[1-9]\d{5}\s*$/ 
console.log(rexegp.test('|000123456  ')) 
console.log(rexegp.test('|000123456\n123\nOLOLO  ')) 
console.log(rexegp.test('   123456  '))              ////-> так
console.log(rexegp.test(' -0123456  '))               //-> так
console.log(rexegp.test('     -12345  '))                 //-> ні
console.log(rexegp.test('   -023456'))                //-> ні
console.log(rexegp.test(' -000016   '))               //-> ні
console.log(rexegp.test(' -000000123456  '))              //-> так
console.log(rexegp.test(' - 000000123456  '))                 //-> ні
console.log(rexegp.test(' +000123456  '))                 //-> так

console.log(rexegp.test('+123456\nololo\nпищ\nпищ')) 