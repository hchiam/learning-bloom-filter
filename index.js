const { BloomFilter } = require("bloom-filters");

const SIZE = 10;
const NUMBER_OF_HASH_FUNCTIONS = 4;

const filter = new BloomFilter(SIZE, NUMBER_OF_HASH_FUNCTIONS);

filter.add("alice");
filter.add("bob");

console.log(filter.has("bob")); // true
console.log(filter.has("daniel")); // false

const errorRate = filter.rate();
console.log(errorRate);

// alternatively:

// const items = ["alice", "bob"];
// const errorRate = 0.04; // 4 % error rate
// const filterOptimizedToItemsAndError = BloomFilter.create(
//   items.length, // or items
//   errorRate
// );
