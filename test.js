const Stack = require("./stack");
const Queue = require("./queue");

test("Stack 클래스로 구현", () => {
  expect(typeof Stack.prototype.constructor).toEqual("function");
});

test("push, pop 메소드 테스트", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toEqual(3);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});

test("getPeak 메소드 테스트", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.getPeak()).toEqual(3);
  expect(s.pop()).toEqual(3);
  expect(s.getPeak()).toEqual(2);
  expect(s.pop()).toEqual(2);
  expect(s.getPeak()).toEqual(1);
  expect(s.pop()).toEqual(1);
});

test("Queue 클래스로 구현", () => {
  expect(typeof Queue.prototype.constructor).toEqual("function");
});

test("Enqueue, Dequeue 메소드 테스트", () => {
  const q = new Queue();
  q.enqueue(1);
  expect(q.dequeue()).toEqual(1);
});

test("getFirst 메소드 테스트", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.getFirst()).toEqual(1);
  expect(q.dequeue()).toEqual(1);
  expect(q.getFirst()).toEqual(2);
  expect(q.dequeue()).toEqual(2);
  expect(q.getFirst()).toEqual(3);
  expect(q.dequeue()).toEqual(3);
  expect(q.dequeue()).toEqual(undefined);
});
