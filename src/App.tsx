import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg.ready(); // говорим Telegram, что MiniApp загружено

    tg.MainButton.setText("Нажми меня");
    tg.MainButton.show();

    tg.MainButton.onClick(() => {
      tg.sendData("clicked");
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Привет из Mini App 🚀</h1>
      <p>React + TypeScript версия</p>
    </div>
  );
}

export default App;
