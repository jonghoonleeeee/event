# CSSメインで作るUIインタラクション

アニメーションやマイクロインタラクションを使ったデザインが増えてきました。なので今回はパララックスデザインやスクロースエフェクトなどに使用出来るようなアニメーションを実装します。

CSSでアニメーションを作り、jQueryを使い任意のタイミングでclassのつけ外しを行います。

- コーディングを独学している方
- 最近業務でコーディングをしている方
を対象をしております。HTMLやCSSの基本的な知識はある前提ですのでご了承ください。

## 環境
HTML、CSS、javascriptの記述、htmlファイルの閲覧ができればPC、エディタは問いません。
ブラウザは一応Safari,Chrome, Microsoft Edge推奨です。
登壇者はMac、Chrome、sumlime textで行います。

## 1. 表示の確認
![ScreenShot 2021-05-24 13 59 35](https://user-images.githubusercontent.com/36651633/119532566-f6af0300-bdbf-11eb-981e-847c80ac8cd1.png)
Githubからファイルをダウンロードし、 `index.html`をブラウザで開いてください


## 2. CSSでアニメーションを作る
animation.cssにアニメーション用のCSSを書いていきます。
デフォルトはopacityで透明にし、`page-active`クラスを付与すると不透明になるようにします。
そしてtransitionを設定しアニメーションするようにします。


## 3. jQueryでClassをつける
script.jsにページ読み込み時に`page-active`クラスを付与する処理を記述します。


## （ハンズオンではやりません） 4. スクロールの応用
jQueryでClassをつけるタイミングを変更すればスクロールエフェクトにすることも可能です。

他にもクリックで表示されるナビゲーションや、jQueryを使わずにhover、focusでアニメーションさせるなど様々な応用ができます。
