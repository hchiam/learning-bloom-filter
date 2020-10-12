# Learning Bloom filter

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://www.youtube.com/watch?v=-SuTGoFYjZs> -> Bloom filters are good for checking if something hasn't been seen before or isn't in a list (like usernames or a URL reject list).

<https://en.wikipedia.org/wiki/Bloom_filter#Algorithm_description>

<https://cs.stackexchange.com/questions/92618/in-a-bloom-filter-why-does-the-optimal-number-of-hashes-increase-with-the-num> -> use more hash functions to get more "bits" in each "fingerprint" but balance it with competing factors in order to decrease chances of false positives.

<https://github.com/Callidon/bloom-filters>

```bash
git clone https://github.com/hchiam/learning-bloom-filter.git && cd learning-bloom-filter && yarn
```

or

```bash
git clone https://github.com/hchiam/learning-bloom-filter.git && cd learning-bloom-filter && npm install
```

and then you can run the example file:

```bash
node index.js
```

<https://www.youtube.com/watch?v=-SuTGoFYjZs> -> optimal Bloom filter specs calculation: `node optimal-bloom-filter-specs-calculation.js`

```js
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
```
