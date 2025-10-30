import React, { useCallback, useEffect, useState } from 'react';
import { fetchNotifications, markAsRead } from '../../../features/Notifications/notificationsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import NotificationToast from '../notifications/NotificationToast';

interface AdminNotificationsProps {
  adminId: string;
}

const NOTIF_INTERVAL = 60 * 1000; // 1 minuto
const SHOWN_NOTIFS_KEY = 'admin_shown_notifications';

const AdminNotifications: React.FC<AdminNotificationsProps> = ({ adminId }) => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state) => state.notifications);
  const [visibleNotif, setVisibleNotif] = useState<string | null>(null);

  // Obtener IDs de notificaciones ya mostradas desde localStorage
  const getShownNotifIds = (): Set<string> => {
    const stored = localStorage.getItem(SHOWN_NOTIFS_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  };

  // Guardar ID de notificación mostrada en localStorage
  const addShownNotifId = useCallback((id: string) => {
    const shownIds = getShownNotifIds();
    shownIds.add(id);
    localStorage.setItem(SHOWN_NOTIFS_KEY, JSON.stringify(Array.from(shownIds)));
  }, []);

  // Mostrar la notificación más reciente no leída que NO se haya mostrado antes
  useEffect(() => {
    const shownIds = getShownNotifIds();
    const unread = notifications.find((n) => !n.read && !shownIds.has(n.id));
    if (unread) {
      setVisibleNotif(unread.id);
      addShownNotifId(unread.id);
    }
  }, [notifications, addShownNotifId]);

  // Auto-cerrar notificación después de 3 segundos
  useEffect(() => {
    if (visibleNotif) {
      const autoCloseTimer = setTimeout(() => {
        dispatch(markAsRead(visibleNotif));
        setVisibleNotif(null);
      }, 5000); // 5 segundos

      return () => clearTimeout(autoCloseTimer);
    }
  }, [visibleNotif, dispatch]);

  // Marcar como leída al cerrar
  const handleClose = useCallback(() => {
    if (visibleNotif) {
      dispatch(markAsRead(visibleNotif));
      setVisibleNotif(null);
    }
  }, [visibleNotif, dispatch]);

  // Primera notificación tras login
  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch, adminId]);

  // Polling cada 5 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchNotifications());
    }, NOTIF_INTERVAL);
    return () => clearInterval(interval);
  }, [dispatch, adminId]);

  // Mostrar Toast si hay notificación visible
  const notif = notifications.find((n) => n.id === visibleNotif);
  return notif ? (
    <NotificationToast message={notif.message} type={notif.type} onClose={handleClose} />
  ) : null;
};

export default AdminNotifications;
