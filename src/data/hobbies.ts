// ─────────────────────────────────────────────────────────────
// HOBBIES — currently a Steam profile card.
// To add more hobbies later, extend this file with new exports
// and add new sections to src/pages/Hobbies.tsx.
// ─────────────────────────────────────────────────────────────

export interface SteamProfile {
  displayName: string
  customUrl: string
  profileUrl: string
  avatarUrl: string
  memberSince: string
  location?: string
  bio: string           // plain-text summary, HTML stripped
}

export const steamProfile: SteamProfile = {
  displayName: 'Fluffy Bacon',
  customUrl: 'FluffyBacon678',
  profileUrl: 'https://steamcommunity.com/id/FluffyBacon678',
  avatarUrl: 'https://avatars.akamai.steamstatic.com/907ba4c7c7a3eefd28bc27d49a17e079a08f55d2_full.jpg',
  memberSince: 'July 4, 2010',
  location: 'Israel',
  bio: 'Fluffy Bacon — a professional octopus. 39,300+ hours of Steam gameplay. Sys admin.',
}
