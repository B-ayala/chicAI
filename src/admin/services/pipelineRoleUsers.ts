// Mock de roles
export type UserRole = 'user' | 'admin' | 'superAdmin';

export interface RoleUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  lastLogin: string | null;
  isActive: boolean;
  token: string; // access token
  refreshToken: string;
}

// Mock de usuarios
export const mockRoleUsers: RoleUser[] = [
  {
    id: '1',
    name: 'Usuario Básico',
    email: 'user1@chicai.com',
    role: 'user',
    createdAt: '2023-11-01T10:15:00Z',
    lastLogin: '2024-06-01T08:30:00Z',
    isActive: true,
    token: 'jwt_token_user1',
    refreshToken: 'refresh_token_user1',
  },
  {
    id: '2',
    name: 'Administrador',
    email: 'admin1@chicai.com',
    role: 'admin',
    createdAt: '2023-10-15T09:00:00Z',
    lastLogin: '2024-06-02T12:45:00Z',
    isActive: true,
    token: 'jwt_token_admin1',
    refreshToken: 'refresh_token_admin1',
  },
  {
    id: '4',
    name: 'Usuario Invitado',
    email: 'user2@chicai.com',
    role: 'user',
    createdAt: '2024-01-10T11:05:00Z',
    lastLogin: null,
    isActive: false,
    token: 'jwt_token_user2',
    refreshToken: 'refresh_token_user2',
  },
  {
    id: '5',
    name: 'Admin Secundario',
    email: 'admin2@chicai.com',
    role: 'admin',
    createdAt: '2023-12-05T13:40:00Z',
    lastLogin: '2024-05-30T19:00:00Z',
    isActive: true,
    token: 'jwt_token_admin2',
    refreshToken: 'refresh_token_admin2',
  },
  {
    id: '6',
    name: 'Súper Admin Backup',
    email: 'superadmin2@chicai.com',
    role: 'superAdmin',
    createdAt: '2023-08-01T08:00:00Z',
    lastLogin: null,
    isActive: false,
    token: 'jwt_token_superadmin2',
    refreshToken: 'refresh_token_superadmin2',
  },
];
