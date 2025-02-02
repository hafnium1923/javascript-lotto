const Lotto = require("../src/domain/Lotto");

describe("로또 클래스 테스트", () => {
  test("배열이 전달되면 로또가 생성되는지 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.numbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test("배열이 전달되면 로또가 오름 차순으로 정렬되는지 테스트", () => {
    const lotto = new Lotto([2, 1, 3, 6, 5, 4]);

    expect(lotto.numbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
