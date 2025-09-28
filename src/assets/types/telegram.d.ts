interface TelegramWebApp {
  initDataUnsafe: any;
  ready: () => void;
  MainButton: {
    setText: (text: string) => void;
    show: () => void;
    onClick: (callback: () => void) => void;
  };
  sendData: (data: string) => void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
