function solution(id_list, report, k) {
    const id_list = ['muzi','frodo','neo','apeach'];
    const report = ['muzi frodo','frodo neo','neo apeach','apeach muzi','muzi neo', 'frodo muzi','frodo muzi'];
    const k = 2;

const set = new Set(report);
const newReport = [...set];
console.log(newReport);
}
