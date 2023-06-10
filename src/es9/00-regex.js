// regex
const regex = /(\d{4})-(\d{2})-(\d{2})/; // 2018-04-30
const match = regex.exec('2023-04-30');
console.table(match);