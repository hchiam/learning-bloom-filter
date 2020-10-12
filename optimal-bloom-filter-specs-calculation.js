/**
 * n = items we plan to put into the filter
 * p = acceptable probability of collisions
 * m = optimal array size m
 * k = number of hash functions needed for optimal filling
 * m = Math.round(Math.abs(n * Math.log(p)) / Math.log(2) ** 2);
 * k = Math.round((m / n) * Math.log(2));
 * note: Math.log() in JavaScript is ln()
 */

// example:
const n = 300000;
const p = 0.01;
const m = Math.round(Math.abs(n * Math.log(p)) / Math.log(2) ** 2);
const k = Math.round((m / n) * Math.log(2));
console.log(`${m} array size needed`);
console.log(`${k} hash function needed`);
