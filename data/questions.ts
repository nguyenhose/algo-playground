export interface AlgoQuestion {
  id: string;
  title: string;
  slug: string;
  description: string;
  starterCode: string;
}

export const questions: AlgoQuestion[] = [
  {
    id: "1",
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    description: "Kiểm tra chuỗi ngoặc có hợp lệ hay không.",
    starterCode: `
// Giải thuật stack
function isValid(s) {
  const stack = [];
  const map = { "(": ")", "{": "}", "[": "]" };
  for (let ch of s) {
    if (map[ch]) stack.push(map[ch]);
    else if (stack.pop() !== ch) return false;
  }
  return stack.length === 0;
}
return isValid("()[]{}");
    `.trim()
  },
  {
    id: "2",
    title: "Debounce Function",
    slug: "debounce",
    description: "Viết một hàm debounce đơn giản.",
    starterCode: `
// debounce(fn, delay)
let timeout;
function debounce(fn, delay) {
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 500);
log("hello");
    `.trim()
  },
  {
  id: "3",
  title: "Curry Function",
  slug: "curry-function",
  description: "Viết hàm curry nhận vào hàm gốc và trả về hàm được curry.",
  starterCode: `
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next) => curried(...args, ...next);
    }
  };
}

// Example
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
return curriedSum(1)(2)(3); // 6
  `.trim()
},
{
  id: "4",
  title: "Run In Series (Promise)",
  slug: "run-in-series",
  description: "Chạy danh sách hàm bất đồng bộ theo thứ tự.",
  starterCode: `
function runInSeries(tasks) {
  return tasks.reduce((p, task) => p.then(task), Promise.resolve());
}

// Example
const tasks = [
  () => new Promise(res => setTimeout(() => res("A"), 300)),
  () => new Promise(res => setTimeout(() => res("B"), 200)),
  () => new Promise(res => setTimeout(() => res("C"), 100)),
];

return runInSeries(tasks).then(console.log);
  `.trim()
},
{
  id: "5",
  title: "Linked List Sort",
  slug: "linked-list-sort",
  description: "Sắp xếp linked list theo thứ tự tăng dần.",
  starterCode: `
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Merge Sort for Linked List
function sortList(head) {
  if (!head || !head.next) return head;

  let slow = head, fast = head, prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;

  const l1 = sortList(head);
  const l2 = sortList(slow);

  return merge(l1, l2);
}

function merge(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}

// Test
const head = new ListNode(3, new ListNode(1, new ListNode(2)));
return sortList(head); // sorted list
  `.trim()
},
{
  id: "6",
  title: "Promise Compare Result",
  slug: "promise-compare",
  description: "So sánh kết quả của nhiều promise.",
  starterCode: `
async function compareTwo(prom1, prom2) {
  const [a, b] = await Promise.all([prom1, prom2]);
  return a === b;
}

// Example
return compareTwo(Promise.resolve(42), Promise.resolve(42)); // true
  `.trim()
},
{
  id: "7",
  title: "Retry Promise",
  slug: "retry-promise",
  description: "Viết hàm gọi promise nhưng sẽ retry khi lỗi.",
  starterCode: `
function retry(fn, times) {
  return new Promise((resolve, reject) => {
    const attempt = () => {
      fn()
        .then(resolve)
        .catch((err) => {
          if (--times === 0) reject(err);
          else attempt();
        });
    };
    attempt();
  });
}

// Example
let count = 0;
const failTwice = () =>
  new Promise((res, rej) => {
    count++ < 2 ? rej("fail") : res("done");
  });

return retry(failTwice, 3); // should return "done"
  `.trim()
},
{
  id: "8",
  title: "Throttle Function",
  slug: "throttle-function",
  description: "Viết hàm throttle giới hạn tần suất gọi hàm.",
  starterCode: `
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// Example
const throttled = throttle(console.log, 1000);
throttled("a");
throttled("b"); // sẽ bị bỏ qua nếu gọi quá nhanh
  `.trim()
},
{
  id: "9",
  title: "Deep Clone Object",
  slug: "deep-clone",
  description: "Clone sâu một object có thể chứa mảng, nested object.",
  starterCode: `
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);

  const result = {};
  for (const key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
}

// Example
const a = { x: { y: 2 }, z: [1, 2, 3] };
const b = deepClone(a);
b.z[0] = 99;
return [a, b]; // a.z không bị ảnh hưởng
  `.trim()
},
{
  id: "10",
  title: "Flatten Nested Array",
  slug: "flatten-array",
  description: "Làm phẳng mảng nhiều cấp.",
  starterCode: `
function flatten(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Example
return flatten([1, [2, [3, 4]], 5]); // [1, 2, 3, 4, 5]
  `.trim()
},
{
  id: "11",
  title: "Custom Event Emitter",
  slug: "event-emitter",
  description: "Tạo class EventEmitter hỗ trợ on/off/emit.",
  starterCode: `
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, handler) {
    (this.events[event] ||= []).push(handler);
  }

  off(event, handler) {
    this.events[event] = (this.events[event] || []).filter(h => h !== handler);
  }

  emit(event, ...args) {
    for (const fn of this.events[event] || []) {
      fn(...args);
    }
  }
}

// Example
const emitter = new EventEmitter();
const cb = (msg) => console.log("event:", msg);

emitter.on("data", cb);
emitter.emit("data", "hello");
emitter.off("data", cb);
emitter.emit("data", "bye");
  `.trim()
},
{
  id: "12",
  title: "Lazy Generator",
  slug: "lazy-generator",
  description: "Tạo generator để sinh chuỗi số vô hạn.",
  starterCode: `
function* naturals() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

// Example
const gen = naturals();
return [gen.next().value, gen.next().value, gen.next().value]; // 1, 2, 3
  `.trim()
},
{
  id: "13",
  title: "Memoize Function",
  slug: "memoize-function",
  description: "Cache kết quả hàm đã tính toán.",
  starterCode: `
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn.apply(this, args));
    }
    return cache.get(key);
  };
}

// Example
const slowAdd = (a, b) => {
  for (let i = 0; i < 1e6; i++) {}
  return a + b;
};

const fastAdd = memoize(slowAdd);
return fastAdd(2, 3); // fast next time
  `.trim()
},
{
  id: "14",
  title: "Async Queue",
  slug: "async-queue",
  description: "Chạy async function lần lượt theo thứ tự.",
  starterCode: `
class AsyncQueue {
  constructor() {
    this.queue = Promise.resolve();
  }

  enqueue(task) {
    this.queue = this.queue.then(() => task());
    return this.queue;
  }
}

// Example
const q = new AsyncQueue();
q.enqueue(() => new Promise(res => setTimeout(() => res(console.log("A")), 300)));
q.enqueue(() => new Promise(res => setTimeout(() => res(console.log("B")), 100)));
q.enqueue(() => new Promise(res => setTimeout(() => res(console.log("C")), 50)));
  `.trim()
},
{
  id: "15",
  title: "Debounce with Leading Option",
  slug: "debounce-leading",
  description: "Thêm tùy chọn leading vào debounce.",
  starterCode: `
function debounce(fn, delay, options = {}) {
  let timer;
  let called = false;

  return function (...args) {
    if (options.leading && !called) {
      fn.apply(this, args);
      called = true;
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!options.leading) fn.apply(this, args);
      called = false;
    }, delay);
  };
}

// Example
const d = debounce(console.log, 500, { leading: true });
d("Hello"); // log ngay
  `.trim()
},
{
  id: "16",
  title: "Custom Bind",
  slug: "custom-bind",
  description: "Tự cài đặt Function.prototype.bind.",
  starterCode: `
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...rest) {
    return fn.apply(context, [...args, ...rest]);
  };
};

// Example
function greet(greeting, name) {
  return greeting + " " + name;
}

const bound = greet.myBind(null, "Hello");
return bound("World"); // "Hello World"
  `.trim()
},
{
  id: "17",
  title: "Deep Equality Check",
  slug: "deep-equal",
  description: "So sánh hai object/phức tạp bằng cách đệ quy.",
  starterCode: `
function isEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;
  if (typeof a !== "object" || a == null || b == null) return false;

  const keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!isEqual(a[key], b[key])) return false;
  }

  return true;
}

// Example
return isEqual({ x: [1, 2] }, { x: [1, 2] }); // true
  `.trim()
},


];
