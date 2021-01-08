//함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.

// 풀이 1
function max(...rest) {
  for(let i=0; i<rest.length; i++){
    for(let j=i+1; j<rest.length; j++){
      if(rest[i]> rest[j]){
        return rest[i]
      }
    }
  }
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);


//풀이 2
function max2(...numbers){
  return numbers.reduce((acc, curr) => curr > acc ? curr : acc, numbers[0])
}

const result2 = max2(1, 2, 3, 4, 10, 5, 6, 7);

console.log(result2)