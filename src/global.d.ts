interface TelegramWebApp {
  close: () => void;
  MainButton: {
    isVisible: boolean;
    show: () => void;
    hide: () => void;
  };
  initDataUnsafe?: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      photo_url?: string;
    };
  };
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
