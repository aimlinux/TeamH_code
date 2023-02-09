/* ---------- お掃除robotの動作 ---------- */
const robot = document.getElementById('cleaningRobot');
let robot_Left = 0; // ロボットのabsoluteの絶対位置（left位置）
let robot_Top = 0; // ロボットのabsoluteの絶対位置（left位置）
const goRight = function () { // 1秒間に右へ20pxずつ進ませる
   robot_Left = robot_Left + 20;
   if (robot_Left === 1000) { // 50秒経ったら１列下の段へ降りて左0に！
      robot_Left = 0;
   }
   robot.style.left = `${robot_Left}px`;
};
const goBottom = function () {
   robot_Top = robot_Top + 150; // 50秒経ったら１列下の段(150px)降りる！
   robot.style.top = `${robot_Top}px`;
};
setInterval(goRight, 1000); // goRightは1秒刻み
setInterval(goBottom, 50000); // goBottomは50秒刻み


/* ---------- 机の色の変化 ---------- */
// tablesの<span>をnodeListとして取得
const tablesArea = document.getElementById('tables');
const tableItem = tablesArea.querySelectorAll('span');

// 消毒完了後75秒後（最初の机は開始からは10秒＋75秒で85秒後）には消毒効果が消えていく
const lose = function (elem) {
   elem.style.backgroundColor = '#DFBF9F';
};

// 1つの机が左右マージンを含めて200pxあるので、1秒間に20px進むロボットは１つの机を拭くのに10秒かかる
let i = -1;
const coloring = function () {
   i = i + 1;
   tableItem[i].style.backgroundColor = '#f98289';
   setTimeout(lose, 75000, tableItem[i]);
};
setInterval(coloring, 10000);

// tableItem[i]とは、nodeListによって取得した<span>（机）の20個の集まり・・・配列に似ているけど、厳密には配列じゃない・・・・console.log(tableItem);を出力してみるとnodeListがよく分かる！