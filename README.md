# express_dynamo_sample

lambda + express + dynamoDB + ES6のserverlessサンプル

## Pre-requisites

* Node.js v6.5.0 or later.
* Serverless CLI `npm install -g serverless`
* AWS credential(詳細は下記)

## AWS credentialについて

https://serverless.com/framework/docs/providers/aws/guide/credentials/

* [Using AWS Profiles](https://serverless.com/framework/docs/providers/aws/guide/credentials#using-aws-profiles)を使ったほうがよさげ
    * [direnv](https://qiita.com/kompiro/items/5fc46089247a56243a62)を使って.envrcを各プロジェクトに設定しておくとAWS Profilesの環境変数セットが簡単

```
.envrc

export AWS_PROFILE=mbw-dev
export AWS_REGION=ap-northeast-1
```

注意
* AdminAccess権限のIAMをセットする必要があります

## 開発

```
yarn
sls dynamodb install   # Local dynamoDB serverをインストール 時間かかります
sls offline start      # Local環境でAPIGWなどエミュレートし、appを実行できます
```


## 運用

```
# デプロイ
sls deploy --vervose

# 削除
# CloudFormationで定義される全てのリソース(lambda, dynamoDB, CloudWatch)を削除します
sls remove --vervose 
```

## リンク

- 公式(英語)
    - [AWS利用のユーザーガイド](https://serverless.com/framework/docs/providers/aws/guide/)
    - [Lambda Example](https://serverless.com/framework/docs/providers/aws/examples/)
- [今から始めるServerless Frameworkで簡単Lambda開発環境の構築](https://dev.classmethod.jp/cloud/aws/easy-deploy-of-lambda-with-serverless-framework/)
- [Serverless FrameworkでExpressを動かす](https://qiita.com/daikiojm/items/087af018959547614376)
