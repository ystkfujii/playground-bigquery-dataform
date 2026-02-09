/**
 * 入力された値（カラム名や数値）に1を足すSQL文字列を返す関数
 * @param {string|number} value - カラム名 または 数値
 * @returns {string} "+ 1" されたSQL文字列
 */
function addOne(value) {
  // SQLとして展開される文字列を返す
  return `${value} + 1`;
}

// 他のファイルから使えるようにエクスポート
module.exports = {
  addOne
};
