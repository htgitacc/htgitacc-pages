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
  extraTech: ['Vercel', 'Netlify', 'Turso', 'Docker', 'MCP', 'Brevo', 'Agent Skills'],
  // Az LLM-modellek és AI-eszközök, amelyekkel dolgozom (a felhő alatti sor).
  llmModels: ['Claude Code', 'Codex', 'Cursor', 'Gemini', 'Copilot', 'DeepSeek', 'GLM', 'Qwen', 'Kimi', 'Grok'],
};
