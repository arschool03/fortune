/****************
 * おみくじアプリで使うJavaScript
 ***************/

// 画面を初期設定する
let shokiSettei = () => {

  // おみくじ結果パネルを隠す
  kakusuPanel(kekkaPanel);

  // 戻るボタンを隠す
  kakusuPanel(modoruButton);

  // タイトル画面のおみくじ画像を設定する
  setteiHomeImage('r.png');

}

// おみくじの中身
let omikujiNakami = [
  { // 青の設定
    kekkaTitle: '青', // おみくじの結果のタイトル文
    kekkaSetsumei: '海や青空をみてみよう', // おみくじの結果につける説明文
    kekkaImage: 'ao.png' //おみくじの結果に表示する画像
  },
 { // 赤の設定
    kekkaTitle: '赤', // おみくじの結果のタイトル文   
    kekkaSetsumei: '赤いものを見てみよう', // おみくじの結果につける説明文
    kekkaImage: 'aka.png' //おみくじの結果に表示する画像
  },
  { // 黄の設定
    kekkaTitle: '黄色', // おみくじの結果のタイトル文
    kekkaSetsumei: '雷は見ないように', // おみくじの結果につける説明文
    kekkaImage: 'kiiro.png' //おみくじの結果に表示する画像
  },
  { // 緑の設定
    kekkaTitle: '緑', // おみくじの結果のタイトル文   
    kekkaSetsumei: '木や森などを見よう', // おみくじの結果につける説明文
    kekkaImage: 'midori.png' //おみくじの結果に表示する画像
  },
  { // 緑の設定
    kekkaTitle: '白', // おみくじの結果のタイトル文   
    kekkaSetsumei: '雲などを見よう', // おみくじの結果につける説明文
    kekkaImage: 'shiro.png' //おみくじの結果に表示する画像
  },
  { // 緑の設定
    kekkaTitle: 'オレンジ', // おみくじの結果のタイトル文   
    kekkaSetsumei: 'みかんなどを見よう', // おみくじの結果につける説明文
    kekkaImage: 'orenge.png' //おみくじの結果に表示する画像
  },
  { // 緑の設定
    kekkaTitle: '紫', // おみくじの結果のタイトル文   
    kekkaSetsumei: 'ブドウなどを見よう', // おみくじの結果につける説明文
    kekkaImage: 'murasaki.png' //おみくじの結果に表示する画像
  },
]; 

  


// おみくじを引く
let hikuOmikuji = () => {

  // 始めの画面のおみくじ画像を隠す
  kakusuPanel(omikujiImage);

  // 「おみくじを引く」ボタンを隠す
  kakusuPanel(hikuButton);

  // おみくじの中身の数までが出るサイコロをふる
  let saikoroMe = furuSaikoro(omikujiNakami.length);

  // 出て来たサイコロの目からおみくじの結果を得る
  let omikujiKekka = omikujiNakami[saikoroMe];

  // おみくじの結果からタイトルを画面に貼り付ける
  setteiKekkaTitle(omikujiKekka.kekkaTitle);

  // おみくじの結果から説明を画面に貼り付ける
  setteiKekkaSetsumei(omikujiKekka.kekkaSetsumei);

  // おみくじの結果から画像を画面に貼り付ける
  setteiKekkaImage(omikujiKekka.kekkaImage);

  // おみくじの結果画面を表示する
  miseruPanel(kekkaPanel);

  // 「戻る」ボタンを表示する
  miseruPanel(modoruButton);

}

// 読み込み終わったら初期設定を実行する
shokiSettei();

// ルーレットの中身
let omikujiRoulette = [
  'ao.png',
  'aka.png',
  'kiiro.png',
  'midori.png',
  'murasaki.png'
];