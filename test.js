
const lottos = [1,21,33,45,15,26];
const num_win = [1,23,42,12,33,34];

const num_winMap = new Map([['1',num_win[0]], ['2',num_win[1]] ,['3',num_win[2]],['4',num_win[3]],
['5',num_win[4]], ['6',num_win[5]]]); 
const lottosMap = new Map([['1',lottos[0]], ['2',lottos[1]] ,['3',lottos[2]],['4',lottos[3]],
['5',lottos[4]], ['6',lottos[5]]]);

console.log(lottosMap);

lottosMap.forEach((key,value)=> console.log(num_winMap.has('key')));

