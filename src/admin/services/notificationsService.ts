// Servicio para consumir notificaciones inteligentes del backend
import { Notification } from '../../features/Notifications/notificationsSlice';

const API_URL = '/api/admin/notifications';

export async function getAdminNotifications(): Promise<Notification[]> {
  const response = await fetch(API_URL, {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Error al obtener notificaciones');
  return response.json();
}
