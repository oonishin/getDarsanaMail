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

Googleスプレッドシートで新規のスプレッドシートを作成し、

* [ツール]−[スクリプトエディタ]

に

* readDarsanaMail.js

の内容を記載して、「関数を選択」でgetDarsanaMailを選択して実行してください。

新規スプレッドシートに対象のメールから、

* 時間
* ポータル名
* 攻撃してきたAgent名

が記載されます。

そのシートデータを元にピボットテーブル等で解析が可能です。

参考：
https://docs.google.com/spreadsheets/d/1snV1WThWBiUMYQe_-prZrPEXjl4Qb0YpvQKrknkENCE/edit?usp=sharing
