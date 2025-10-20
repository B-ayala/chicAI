export interface AuthUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  roles: string[];
  department: string;
  last_login: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: AuthUser;
  expires_in: number;
  token_type: string;
}

export const mockAuthResponse: AuthResponse = {
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  refresh_token: 'def50200a1b2c3d4e5f67890123456789012',
  user: {
    id: 12345,
    username: 'john.doe',
    email: 'john.doe@santander.com',
    first_name: 'John',
    last_name: 'Doe',
    roles: ['user', 'analyst'],
    department: 'Technology',
    last_login: '2025-10-14T10:30:00Z',
  },
  expires_in: 3600,
  token_type: 'Bearer',
};
