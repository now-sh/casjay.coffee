<template>
  <div v-if="loading">
    <spinner msgSpinner="Loading profile information" />
  </div>
  <ErrorState
    v-else-if="error"
    message="Unable to load profile information. Please try again later."
  />
  <EmptyState
    v-else-if="!profile || Object.keys(profile).length === 0"
    title="No Profile Information Found"
    message="Profile information is currently unavailable."
  />
  <div v-else class="row text-center">
    <div class="col-md-6 offset-md-3">
      <div class="text-center">
        <h1>{{ profile.name }}</h1>
        <p>{{ profile.bio }}</p>
        <br />
      </div>

      <section v-if="profile.email?.length">
        <h2>Email:</h2>
        <div class="mb-3">
          <a
            v-for="email in profile.email"
            :key="email"
            :href="`mailto:${email}`"
            class="d-block"
          >
            {{ email }}
          </a>
        </div>
      </section>

      <section v-if="profile.social?.length">
        <h2>Social</h2>
        <div class="mb-3">
          <a
            v-for="[name, url] in profile.social"
            :key="name"
            :href="`https://${url}`"
            class="mx-2"
            target="_blank"
            rel="noopener noreferrer"
            :title="name"
          >
            <img 
              :src="getShieldBadge(name, 'social')"
              :alt="name"
              class="social-icon"
            />
          </a>
        </div>
      </section>

      <section v-if="profile.verify?.length">
        <h2>Verify</h2>
        <div class="mb-3">
          <a
            v-for="[name, url] in profile.verify"
            :key="name"
            :href="`https://${url}`"
            class="mx-2"
            target="_blank"
            rel="noopener noreferrer"
            :title="name"
          >
            <img 
              :src="getShieldBadge(name, 'verify')"
              :alt="name"
              class="verify-icon"
            />
          </a>
        </div>
      </section>

      <section v-if="profile.sponsor?.length">
        <h2>Sponsor:</h2>
        <div class="mb-3">
          <a
            v-for="[name, url] in profile.sponsor"
            :key="name"
            :href="url"
            class="mx-2"
            target="_blank"
            rel="noopener noreferrer"
            :title="`Sponsor via ${name}`"
          >
            <img 
              :src="getShieldBadge(name, 'sponsor')"
              :alt="name"
              class="sponsor-icon"
            />
          </a>
        </div>
      </section>
    </div>
  </div>
  <div class="mb-5" />
</template>

<script setup lang="ts">
import Spinner from '@/loaders/spinner.vue';
import ErrorState from '@/components/ErrorState.vue';
import EmptyState from '@/components/EmptyState.vue';
import { useApi } from '@/composables/useApi';
import type { ProfileContact } from '@/types/api';

const { data: profile, loading, error } = useApi<ProfileContact>(
  'https://raw.githubusercontent.com/casjay/casjay/main/profile.json',
);

// Dynamic badge generation function
const getShieldBadge = (name: string, category: string) => {
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
</script>

<style scoped>
.verify-icon,
.sponsor-icon,
.social-icon {
  height: 40px;
  transition: transform 0.2s ease;
}

.verify-icon:hover,
.sponsor-icon:hover,
.social-icon:hover {
  transform: scale(1.1);
}

@media (max-width: 767.98px) {
  .verify-icon,
  .sponsor-icon,
  .social-icon {
    height: 30px;
  }
}
</style>
