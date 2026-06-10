// ─────────────────────────────────────────────────────────────
// HOBBIES — Steam profile card + stats + top games.
// To refresh: https://steamcommunity.com/id/FluffyBacon678/?xml=1
// ─────────────────────────────────────────────────────────────

export interface SteamStat {
  label: string
  value: string
}

export interface SteamGame {
  name: string
  appId: string
  hoursTotal: string    // total hours on record, e.g. "1,116"
  capsuleUrl: string    // horizontal capsule image
}

export interface SteamProfile {
  displayName: string
  customUrl: string
  profileUrl: string
  avatarUrl: string
  memberSince: string
  location?: string
  status: string
  bio: string           // plain-text summary, HTML stripped
  stats: SteamStat[]
  topGames: SteamGame[]
}

export const steamProfile: SteamProfile = {
  displayName: 'Fluffy Bacon',
  customUrl: 'FluffyBacon678',
  profileUrl: 'https://steamcommunity.com/id/FluffyBacon678',
  avatarUrl: 'https://avatars.akamai.steamstatic.com/907ba4c7c7a3eefd28bc27d49a17e079a08f55d2_full.jpg',
  memberSince: 'July 4, 2010',
  location: 'Israel',
  status: 'Online',
  bio: 'Fluffy Bacon — a professional octopus. 39,300+ hours of Steam gameplay. Sys admin.',

  stats: [
    { label: 'On Steam', value: '15+ yrs' },
    { label: 'Total playtime', value: '39,300+ hrs' },
    { label: 'Most played', value: 'Wallpaper Engine' },
    { label: 'Games tracked', value: '6 recent' },
  ],

  // Most played, last 2 weeks (from the profile XML).
  topGames: [
    { name: 'Wallpaper Engine', appId: '431960', hoursTotal: '1,116', capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/431960/capsule_184x69.jpg' },
    { name: 'DCS World Steam Edition', appId: '223750', hoursTotal: '2,061', capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/223750/capsule_184x69.jpg' },
    { name: 'CivIdle', appId: '2181940', hoursTotal: '1,713', capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2181940/3ea0fff4ca992bed792297e947194f3783892d87/capsule_184x69.jpg' },
    { name: 'Broken Arrow', appId: '1604270', hoursTotal: '245', capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1604270/c9d8751ebc1eaa0da074105d2f41039e6dff0758/capsule_184x69.jpg' },
    { name: 'Gray Zone Warfare', appId: '2479810', hoursTotal: '19.5', capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2479810/98a7afd24071040c96f6010b798b88ccacb62038/capsule_184x69.jpg' },
    { name: 'Evoland Legendary Edition', appId: '1020470', hoursTotal: '12.7', capsuleUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1020470/capsule_184x69.jpg' },
  ],
}
