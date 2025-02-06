import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const API_KEY = process.env.GEMINI_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { difficulty } = req.body;

  const prompt = `ランダムな日本語を作成し、その日本語に対して意味は同じだが言い回しが異なる英文を5つ作成して欲しい。
回答はMarkdown形式で強調文字は使用せず簡素にする。
難易度は${difficulty}レベルとする。
出来上がった英文に日本語訳を付けて、各英文で言い回しが異なる部分の説明を行う。
この際に説明に使用する単語だけ強調文字にする。
使用した熟語のうちひとつを選択して英文の穴埋め問題を作成し、最後に正解を記載する。
'''
----

## 日本語

日本語

----

### No.1

- 英文: 
- 日本語訳: 
- 熟語の説明: 

----

### No.2

- 英文: 
- 日本語訳: 
- 熟語の説明: 

----

### No.3

- 英文: 
- 日本語訳: 
- 熟語の説明: 

----

### No.4

- 英文: 
- 日本語訳: 
- 熟語の説明: 

----

### No.5

- 英文: 
- 日本語訳: 
- 熟語の説明: 

----

## 穴埋め問題

次の日本語訳になるよう英文を完成させなさい。

- 日本語: 
- 英文: 
- 選択肢: 
  1. 英語 (日本語)
  2. 英語 (日本語)
  3. 英語 (日本語)
  4. 英語 (日本語)
  5. 英語 (日本語)

<br>
<br>
<br>
<br>
<br>

- 正解: 
- 解説: 
'''`;

  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });

    if (!response.ok) throw new Error('API request failed');

    const data = await response.json();
    res.status(200).json({ content: data.candidates[0].content.parts[0].text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
