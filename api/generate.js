// Vercel serverless function — proxies requests to Anthropic's API
// Deployed at: /api/generate
// Requires env var: ANTHROPIC_API_KEY (set in Vercel dashboard)

export default async function handler(req, res) {
  // CORS — allow the brand hub to call this from anywhere
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body || {};

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid prompt' });
  }

  // Hard size cap — protects against accidental runaway prompts
  if (prompt.length > 20000) {
    return res.status(400).json({ error: 'Prompt too long' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server not configured (missing ANTHROPIC_API_KEY)' });
  }

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 8000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error('Anthropic API error:', anthropicRes.status, errText);
      return res.status(502).json({ error: 'Upstream AI error', detail: errText.slice(0, 500) });
    }

    const data = await anthropicRes.json();
    const text = data?.content?.[0]?.text || '';

    return res.status(200).json({ text });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Server error', detail: String(err).slice(0, 500) });
  }
}
