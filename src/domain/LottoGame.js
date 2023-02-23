const Lotto = require("./Lotto");
const WinLotto = require("../domain/WinLotto");
const Random = require("../util/Random");
const { PRIZE, RANK, LOTTO, DECIMAL } = require("../constant/Constant");

const RANK_RESULT = {
  [RANK.FIRST]: 0,
  [RANK.SECOND]: 0,
  [RANK.THIRD]: 0,
  [RANK.FOURTH]: 0,
  [RANK.FIFTH]: 0,
};

class LottoGame {
  #lottos;
  #winLottos;

  constructor() {
    this.#lottos = [];
  }

  get lottos() {
    return this.#lottos;
  }

  get lottoCount() {
    return this.#lottos.length;
  }

  set lottos(money) {
    const lottoCount = parseInt(money / 1000, DECIMAL);
    Array.from({ length: lottoCount }, () => {
      const lottoOne = new Lotto(this.#LottoNumberGenerator());
      this.#lottos.push(lottoOne);
    });
  }

  #LottoNumberGenerator() {
    const lottoNumbers = new Set();
    while (lottoNumbers.size < LOTTO.NUM_SIZE) {
      lottoNumbers.add(Random.RandomMinMax(LOTTO.MIN, LOTTO.MAX));
    }
    return Array.from(lottoNumbers);
  }

  makeWinLotto(winNumbers, bonusNumber) {
    this.#winLottos = new WinLotto(winNumbers, bonusNumber);
  }

  calculateRank(numbers) {
    const winNumbers = this.#winLottos.numbers;
    const bonusNumber = this.#winLottos.bonusNumber;
    const sameNumbers = numbers.filter((num) => winNumbers.includes(num));
    const correctCount = sameNumbers.length;
    if (correctCount === 6) return RANK.FIRST;
    if (correctCount === 5 && numbers.includes(bonusNumber)) return RANK.SECOND;
    if (correctCount === 5) return RANK.THIRD;
    if (correctCount === 4) return RANK.FOURTH;
    if (correctCount === 3) return RANK.FIFTH;
    return RANK.LOSER;
  }

  calculateRankResult() {
    const rankResult = { ...RANK_RESULT };

    this.#lottos.forEach((lotto) => {
      const rank = this.calculateRank(lotto.numbers);
      rankResult[rank]++;
    });

    return rankResult;
  }

  calculateRevenueRate(rankResult) {
    const revenue = Object.keys(PRIZE).reduce(
      (result, rank) => result + PRIZE[rank] * rankResult[rank],
      0
    );

    return (revenue / (this.#lottos.length * 10)).toFixed(1);
  }
}

module.exports = LottoGame;
