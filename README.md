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

ラベルをつけるのが面倒な人は、3行目、4行目の

```
  var thds = GmailApp.search("label:darsana")
 // var thds = GmailApp.search("after:2014/12/13 before:2014/12/14 from:(ingress-support@google.com) subject:(Ingress Damage Report: Entities attacked by)")
```

を

```
//  var thds = GmailApp.search("label:darsana")
    var thds = GmailApp.search("after:2014/12/13 before:2014/12/14 from:(ingress-support@google.com) subject:(Ingress Damage Report: Entities attacked by)")
```
として、12/13～14分のDamage Reportで処理して、Googleスプレッドシートで不要なデータを削除してください。

※Gmailは一日分のみだけのデータ検索できないので、こんな形です。

また、Darsana以外のラベル名のつけている場合は、

```
var thds = GmailApp.search("label:darsana")
```

の「label:darsana」を変更してください。



Googleスプレッドシートで新規のスプレッドシートを作成し、

* [ツール]−[スクリプトエディタ]

を開き、空のプロジェクトを選択し

* [readDarsanaMail.js](https://github.com/oonishin/getIngressMail/blob/master/readDarsanaMail.js)

の内容を記載して、適当なプロジェクト名をつけて保存してください、

保存後、「関数を選択」でgetDarsanaMailを選択して実行してください。

※必要に応じて、

* メールの表示と管理
* Google ドライブのスプレッドシートの表示と管理

の承認が求められますので、承認してください。

新規スプレッドシートに対象のメールから、

* 時間
* ポータル名
* 攻撃してきたAgent名

が記載されます。（メール量にもよりますが、数分かかります。）

そのシートデータを元にピボットテーブル等で解析が可能です。

実行例：

https://docs.google.com/spreadsheets/d/1snV1WThWBiUMYQe_-prZrPEXjl4Qb0YpvQKrknkENCE/edit?usp=sharing
