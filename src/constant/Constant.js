const MESSAGES = {
  readMoney: "> 구입금액을 입력해 주세요. ",
  readWinNumbers: "\n> 당첨 번호를 입력해 주세요. ",
  readBonusNumber: "\n> 보너스 번호를 입력해 주세요. ",
  readCommandRestart: "\n> 다시 시작하시겠습니까? (y/n) ",

  printLottoCount: "개를 구매했습니다.",
  printRankResult: "\n당첨 통계\n-------------------",
  pieces: "개",
  printFifth: "3개 일치 (5,000원) - ",
  printFourth: "4개 일치 (50,000원)) - ",
  printThrid: "5개 일치 (1,500,000원) - ",
  printSecond: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  printFirst: "6개 일치 (2,000,000,000원) - ",
  printRevenue: "총 수익률은 ",
  printFinal: "%입니다.",
};

const ERROR_MESSAGES = {
  isWrongMoney: "[ERROR] 구입 금액은 1000원 단위로 입력하세요.\n",

  isOverRangeNumber: "[ERROR] 당첨 번호는 1부터 45까지로 입력하세요.\n",
  isWrongLottoNumber: "[ERROR] 당첨 번호를 6개 입력하세요.\n",
  isSameLottoNumber: "[ERROR] 당첨 번호를 중복 없이 입력하세요.\n",

  isOverRangeBouns: "[ERROR] 보너스 번호는 1부터 45까지로 입력하세요.\n",
  isSameBonusNumber: "[ERROR] 당첨 번호와 중복 없이 입력하세요.\n",

  isWrongCommand: "[ERROR] 재시작 명령어는 y혹은 n으로만 입력하세요.\n",
};

const RANK = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  LOSER: 0,
};

const RANK_BY_CORRECT_COUNT = {
  0: RANK.LOSER,
  1: RANK.LOSER,
  2: RANK.LOSER,
  3: RANK.FIFTH,
  4: RANK.FOURTH,
  5: RANK.THIRD,
  BONUS: RANK.SECOND,
  6: RANK.FIRST,
};

const LOTTO = {
  MAX: 45,
  MIN: 1,
  NUM_SIZE: 6,
};

const PRIZE = {
  [RANK.FIRST]: 2000000000,
  [RANK.SECOND]: 30000000,
  [RANK.THIRD]: 1500000,
  [RANK.FOURTH]: 50000,
  [RANK.FIFTH]: 5000,
};

module.exports = {
  MESSAGES,
  ERROR_MESSAGES,
  RANK,
  RANK_BY_CORRECTCOUNT: RANK_BY_CORRECT_COUNT,
  LOTTO,
  PRIZE,
};
