export async function generateContent() {
    const response = await fetch('/api/generate', {
      method: 'POST',
    });
  
    if (!response.ok) {
      throw new Error('API request failed');
    }
  
    const data = await response.json();
    return data.content;
  }
  