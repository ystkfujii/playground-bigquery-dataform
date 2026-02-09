/**
 * 入力された値（カラム名や数値）に1を足す文字列を返す
 */
function addOne(value) {
  return `${value} + 1`;
}

function replaceEnv(text) {
  if (!text) return "";
  return `"${text.replaceAll("dev", "envdev")}"`;
}

module.exports = {
  addOne,
  replaceEnv
};
