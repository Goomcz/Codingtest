// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['banana','apple','orange'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('apple'));
// 내가 틀렸던 부분이다! console.log(fruits.indexOf([1])); 인덱스를 찾는건데 인덱스를 주면 뭘 찾으란 거니?


// 배열에 내가 찾는 값이 있는지 확인 할 때
console.log(fruits.includes('banana'));

// 추가 : 제일 뒤에 
fruits.push('cherry');
console.log(fruits);

// 추가 : 제일 앞에

fruits.unshift('watermelon');
console.log(fruits);


// 제거 : 제일 뒤에
fruits.pop();
console.log(fruits);

// 제거 : 제일 앞에
fruits.shift();
console.log(fruits);

// shift/unshift 는 제일 앞에 ele를 제거하거나 추가하여 기존의 배열을 하나씩 이동 시켜 새로운 배열을 만드므로
// 오래 걸린다.  

// 중간에 추가 또는 삭제
// [1] 부터 시작해서 1개 삭제
fruits.splice(1,1);
console.log(fruits);

fruits.splice(1,0,'grape');
console.log(fruits);
