// GitHub API types
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  html_url: string;
}

export interface GitHubOrg {
  id: number;
  login: string;
  avatar_url: string;
  description: string | null;
  html_url: string;
}

// Profile API types
export interface ProfileContact {
  name: string;
  email: string;
  bio: string;
  websites: Array<[string, string]>;
  phone: Array<[string, string]>;
  email_primary: Array<[string, string, string]>;
  email_other: Array<[string, string, string]>;
  chat: Array<[string, string, string]>;
  social: Array<[string, string]>;
  verify: Array<[string, string]>;
  sponsor: Array<[string, string]>;
}

// Domains API types
export interface DomainsData {
  domains: string[];
  subDomains: string[];
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  repos?: T;
  orgs?: T;
}

// Error/Empty response type
export interface ApiErrorResponse {
  message: string;
  github_profile?: string;
}
