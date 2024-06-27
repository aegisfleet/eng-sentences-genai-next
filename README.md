# AIランダム英文生成アプリ

<img src="public/logo.svg" width="500px">

このWebアプリケーションは、英語学習をサポートするために設計されています。  
ランダムに生成された日本語フレーズを基に英文を5つ生成し、それぞれの熟語や表現について解説します。

## 使い方

<https://eng-sentences-genai-next.vercel.app/>  
Webページにアクセスすると自動的に英文が生成されます。ページをリロードすることで新しい英文が生成されます。

## インストール方法

本アプリを動作させるためにはGeminiのAPIキーが必要になります。  
[Google AI Studio](https://ai.google.dev/gemini-api?hl=ja)でAPIキーを発行して使用してください。

```text
git clone https://github.com/aegisfleet/eng-sentences-genai-next.git
cd eng-sentences-genai-next
echo GEMINI_API_KEY=your_api_key_here > .env.local
npm install marked
npm run dev
```

## デプロイ

このアプリケーションは[Vercel](https://vercel.com/)で稼働しています。  
mainブランチにコミットするとGitHub ActionsによってVercelに自動的にデプロイされます。

## 貢献方法

皆さんからの貢献を歓迎しています！ご感想やフィードバックはTwitterでお知らせください。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。
