// ─────────────────────────────────────────────────────────────
// HOBBIES — currently a Steam profile showcase.
// To refresh game data: visit https://steamcommunity.com/id/FluffyBacon678/?xml=1
// and update the values below, or just edit them manually.
// To add other hobbies later, extend this file with new exports
// and add new sections to src/pages/Hobbies.tsx.
// ─────────────────────────────────────────────────────────────

export interface SteamGame {
  name: string
  appId: string         // numeric Steam app id
  hoursTotal: string    // total hours on record, e.g. "1,105"
  hoursRecent?: string  // hours in the last 2 weeks (optional)
  capsuleUrl: string    // small horizontal game capsule image
}

export interface SteamProfile {
  displayName: string
  customUrl: string
  profileUrl: string
  avatarUrl: string
  memberSince: string
  location?: string
  bio: string           // plain-text summary, HTML stripped
  topGames: SteamGame[]
}

export const steamProfile: SteamProfile = {
  displayName: 'Fluffy Bacon',
  customUrl: 'FluffyBacon678',
  profileUrl: 'https://steamcommunity.com/id/FluffyBacon678',
  avatarUrl: 'https://avatars.akamai.steamstatic.com/907ba4c7c7a3eefd28bc27d49a17e079a08f55d2_full.jpg',
  memberSince: 'July 4, 2010',
  location: 'Israel',
  bio: 'Fluffy Bacon — a professional octopus. 39,300+ hours of Steam gameplay. Sys admin.',
  topGames: [
    {
      name: 'Wallpaper Engine',
      appId: '431960',
      hoursTotal: '1,105',
      hoursRecent: '75.0',
      capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/431960/capsule_184x69.jpg',
    },
    {
      name: 'DCS World Steam Edition',
      appId: '223750',
      hoursTotal: '2,055',
      hoursRecent: '31.6',
      capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/223750/capsule_184x69.jpg',
    },
    {
      name: 'Broken Arrow',
      appId: '1604270',
      hoursTotal: '239',
      hoursRecent: '30.6',
      capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1604270/c9d8751ebc1eaa0da074105d2f41039e6dff0758/capsule_184x69.jpg',
    },
    {
      name: 'CivIdle',
      appId: '2181940',
      hoursTotal: '1,710',
      hoursRecent: '20.5',
      capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2181940/3ea0fff4ca992bed792297e947194f3783892d87/capsule_184x69.jpg',
    },
    {
      name: 'Gray Zone Warfare',
      appId: '2479810',
      hoursTotal: '17.2',
      hoursRecent: '14.0',
      capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2479810/98a7afd24071040c96f6010b798b88ccacb62038/capsule_184x69.jpg',
    },
    {
      name: 'Evoland Legendary Edition',
      appId: '1020470',
      hoursTotal: '12.7',
      hoursRecent: '12.7',
      capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1020470/capsule_184x69.jpg',
    },
  ],
}
