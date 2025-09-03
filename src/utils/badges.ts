// Dynamic badge generation function for shields.io badges
// eslint-disable-next-line import/prefer-default-export
export const getShieldBadge = (name: string, category: string) => {
  const lowerName = name.toLowerCase();
  
  // Badge configurations for known services
  const badgeConfigs: Record<string, { logo: string; color: string; label?: string }> = {
    // Social platforms
    mastodon: { logo: 'mastodon', color: '6364FF' },
    'mastodon.social': { logo: 'mastodon', color: '6364FF', label: 'Mastodon' },
    distrotoot: { logo: 'mastodon', color: '3088D4', label: 'Distrotoot' },
    twitter: { logo: 'twitter', color: '1DA1F2' },
    x: { logo: 'x', color: '000000' },
    facebook: { logo: 'facebook', color: '1877F2' },
    instagram: { logo: 'instagram', color: 'E4405F' },
    linkedin: { logo: 'linkedin', color: '0A66C2' },
    github: { logo: 'github', color: '181717' },
    gitlab: { logo: 'gitlab', color: 'FC6D26' },
    reddit: { logo: 'reddit', color: 'FF4500' },
    youtube: { logo: 'youtube', color: 'FF0000' },
    twitch: { logo: 'twitch', color: '9146FF' },
    discord: { logo: 'discord', color: '5865F2' },
    telegram: { logo: 'telegram', color: '26A5E4' },
    whatsapp: { logo: 'whatsapp', color: '25D366' },
    
    // Sponsor platforms
    paypal: { logo: 'paypal', color: '00457C', label: 'Donate' },
    patreon: { logo: 'patreon', color: 'FF424D', label: 'Support' },
    'github sponsors': { logo: 'githubsponsors', color: 'EA4AAA', label: 'Sponsor' },
    'ko-fi': { logo: 'kofi', color: 'FF5E5B', label: 'Buy Coffee' },
    kofi: { logo: 'kofi', color: 'FF5E5B', label: 'Buy Coffee' },
    buymeacoffee: { logo: 'buymeacoffee', color: 'FFDD00', label: 'Buy Coffee' },
    opencollective: { logo: 'opencollective', color: '7FADF2', label: 'Support' },
    
    // Verify platforms
    gpg: { logo: 'gnuprivacyguard', color: '0093DD', label: 'GPG Key' },
    pgp: { logo: 'gnuprivacyguard', color: '0093DD', label: 'PGP Key' },
    ssh: { logo: 'openssh', color: '000000', label: 'SSH Key' },
    keybase: { logo: 'keybase', color: 'FF6F21', label: 'Verified' },
    
    // Development platforms
    stackoverflow: { logo: 'stackoverflow', color: 'F58025' },
    devto: { logo: 'devdotto', color: '0A0A0A' },
    medium: { logo: 'medium', color: '12100E' },
    hashnode: { logo: 'hashnode', color: '2962FF' },
    
    // Chat platforms
    slack: { logo: 'slack', color: '4A154B' },
    element: { logo: 'element', color: '0DBD8B' },
    matrix: { logo: 'matrix', color: '000000' },
    signal: { logo: 'signal', color: '3A76F0' },
    
    // Other platforms
    npm: { logo: 'npm', color: 'CB3837' },
    codepen: { logo: 'codepen', color: '000000' },
    docker: { logo: 'docker', color: '2496ED' },
    tiktok: { logo: 'tiktok', color: '000000' },
    pinterest: { logo: 'pinterest', color: 'BD081C' },
  };
  
  // Check if we have a config for this service
  const config = badgeConfigs[lowerName] 
    || badgeConfigs[lowerName.replace(/[.\s-]/g, '')] 
    || null;
  
  if (config) {
    const label = config.label || name;
    const encodedLabel = encodeURIComponent(label);
    return `https://img.shields.io/badge/${encodedLabel}-${config.color}?style=for-the-badge&logo=${config.logo}&logoColor=white`;
  }
  
  // Fallback: generate a badge with the name and category-based color
  const colors: Record<string, string> = {
    social: '1877F2',
    sponsor: '00457C',
    verify: '0093DD',
  };
  
  const encodedName = encodeURIComponent(name);
  const color = colors[category] || '555555';
  
  // Try to find a logo by guessing the service name
  const possibleLogo = lowerName.replace(/[.\s-]/g, '');
  
  return `https://img.shields.io/badge/${encodedName}-${color}?style=for-the-badge&logo=${possibleLogo}&logoColor=white`;
};