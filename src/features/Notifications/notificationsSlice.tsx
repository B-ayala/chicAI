import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  createdAt: string;
}

interface NotificationsState {
  notifications: Notification[];
  loading: boolean;
  error: string | null;
}

const initialState: NotificationsState = {
  notifications: [],
  loading: false,
  error: null,
};

// Datos mock para desarrollo (reemplazar con API real)
const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    message: '🎯 Stock bajo en categoría "Mujer". Se recomienda reposición urgente.',
    type: 'warning',
    read: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    message: '✨ Las ventas aumentaron un 15% esta semana. ¡Excelente trabajo!',
    type: 'success',
    read: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    message: '💡 Considera aumentar el precio de "Zapatillas Running Pro" en un 8%.',
    type: 'info',
    read: false,
    createdAt: new Date().toISOString(),
  },
];

// Async thunk para obtener notificaciones del backend
export const fetchNotifications = createAsyncThunk<Notification[], void, { rejectValue: string }>(
  'notifications/fetchNotifications',
  async (_, { rejectWithValue }) => {
    try {
      // TODO: Reemplazar con llamada real al backend
      // const response = await fetch('/api/admin/notifications');
      // if (!response.ok) throw new Error('Error al obtener notificaciones');
      // return await response.json();

      // Simulación de delay de red
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Retornar una notificación aleatoria del mock
      const randomNotif = MOCK_NOTIFICATIONS[Math.floor(Math.random() * MOCK_NOTIFICATIONS.length)];
      return [
        {
          ...randomNotif,
          id: Date.now().toString(), // ID único cada vez
          createdAt: new Date().toISOString(),
        },
      ];
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead(state, action: PayloadAction<string>) {
      const notif = state.notifications.find((n) => n.id === action.payload);
      if (notif) notif.read = true;
    },
    addNotification(state, action: PayloadAction<Notification>) {
      state.notifications.unshift(action.payload);
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error desconocido';
      });
  },
});

export const { markAsRead, addNotification, clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
