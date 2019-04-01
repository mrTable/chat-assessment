let socketOrigin;
if (process.env.NODE_ENV === 'production') {
  socketOrigin = `ws://${window.location.hostname}`;
} else {
  socketOrigin = `ws://${window.location.hostname}:8000`;
}

export const chatSocket = `${socketOrigin}/ws/chat/`;
