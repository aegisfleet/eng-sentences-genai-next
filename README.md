# AIランダム英文生成アプリ

<img src="public/logo.svg" width="500px">

このWebアプリケーションは、英語学習をサポートするために設計されています。  
ランダムに生成された日本語フレーズを基に英文を5つ生成し、それぞれの熟語や表現について解説します。

## 特徴

- 難易度別の英文生成（小学生、中学生、高校生、大学生レベル）
- 各英文に対する日本語訳と熟語の解説
- お気に入り機能で気に入った英文セットを保存可能
- 穴埋め問題による学習効果の向上
- PWA (Progressive Web App) 対応で、デスクトップやモバイルデバイスにインストール可能

## 使い方

1. [https://eng-sentences-genai-next.vercel.app/](https://eng-sentences-genai-next.vercel.app/) にアクセス
2. 画面下部の「難易度」セレクターから希望のレベルを選択
3. 「新しい英文を生成」ボタンをクリックして英文を生成
4. 生成された英文を学習し、必要に応じてお気に入りに追加
5. 「お気に入りを見る」ボタンでお気に入りの英文セットを確認・管理

詳細な使い方については、アプリ内の「アプリの使い方」リンクをクリックしてご確認ください。

## インストール方法

本アプリを動作させるためにはGeminiのAPIキーが必要です。  
[Google AI Studio](https://ai.google.dev/gemini-api?hl=ja)でAPIキーを発行して使用してください。

```bash
git clone https://github.com/aegisfleet/eng-sentences-genai-next.git
cd eng-sentences-genai-next
echo GEMINI_API_KEY=your_api_key_here > .env.local
npm install
npm run dev
```

## 技術スタック

- [Next.js](https://nextjs.org/) - Reactベースのフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な JavaScript
- [Gemini API](https://ai.google.dev/) - Google AI による自然言語処理
- [Vercel](https://vercel.com/) - ホスティングとデプロイメント
- [PWA](https://web.dev/progressive-web-apps/) - Progressive Web App 機能

## デプロイ

このアプリケーションは[Vercel](https://vercel.com/)で稼働しています。  
mainブランチにコミットするとGitHub ActionsによってVercelに自動的にデプロイされます。

## フィードバック

ご感想やフィードバックは[Twitter](https://x.com/aegisfleet)でお知らせください。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。  

## 関連記事

- [【独りアジャイル開発】Claude 3.5 Sonnetで「AIランダム英文生成アプリ」を作ってみた](https://note.com/aegisfleet/n/n4f46530f5029)

## 作者

[ポち](https://github.com/aegisfleet)
