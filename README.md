getIngressMail
==============

readDarsanaMail.js
------------------

Darsana 開催時のIngress Damage Report メールからGoogleスプレッドシートに

* 時間
* ポータル名
* 攻撃してきたAgent名

を抽出するスクリプトです。

利用方法
---------

事前にGmailで12/13 Darsana開催時のメールに

* Darsana

のラベルを付与してください。

Googleスプレッドシートの

* [ツール]−[スクリプトエディタ]

に

* readDarsanaMail.js

の内容を記載して、「関数を選択」でgetDarsanaMailを選択して実行してください。
