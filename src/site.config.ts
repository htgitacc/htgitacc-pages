// Központi hely a linkekhez, amiket könnyen kell tudni cserélni.
export const siteConfig = {
  displayName: 'Tibor',
  githubProfileUrl: 'https://github.com/htgitacc',
  // Töltsd ki, amint elkészült a LinkedIn poszt / profil link — amíg
  // null, a LinkedIn gomb nem jelenik meg a kezdőlapon.
  linkedinUrl: null as string | null,
  // Technológiák, amelyeket a projektek használnak, de nem egy-egy kártya
  // címkéi (hosting, infrastruktúra, módszer). A technológia-felhőbe kerülnek;
  // ami már egy kártyán szerepel, azt nem duplázzuk (kis/nagybetű nélkül).
  extraTech: ['Vercel', 'Netlify', 'Turso', 'Docker', 'MCP', 'Brevo', 'Agent Skills', 'AI-Driven DevOps', 'Caddy', 'Nginx'],
  // Egymás mellé rendezett technológia-blokkok a felhőben (a blokk a tagjai közül
  // az elöl állónak megfelelő helyre kerül, a megadott sorrendben).
  techBlocks: [['GitHub', 'AI-Driven DevOps', 'GitHub Actions']],
  // A felhő legaljára kerülő technológiák (ebben a sorrendben).
  techLast: ['Caddy', 'Nginx'],
  // LLM-modellek és fejlesztési környezet (a felhő alatti sor). Ami itt szerepel,
  // az a kártyákon marad címkének, de a technológia-felhőből kimarad (nem duplázzuk).
  llmModels: ['Claude Code', 'Codex', 'Cursor', 'Gemini', 'Copilot', 'DeepSeek', 'GLM', 'Qwen', 'Kimi', 'Grok', 'Whisper', 'Groq', 'Pi', 'WSL', 'Linux', 'Tmux', 'VSCode'],
};
