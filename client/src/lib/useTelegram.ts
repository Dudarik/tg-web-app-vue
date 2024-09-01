const tg = window.Telegram.WebApp;

const useUserInfo = () => {
  const { user } = tg.initDataUnsafe;
  if (user) {
    const { username, first_name, last_name } = user;
    return {
      username,
      first_name,
      last_name,
    };
  }
};
export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  return {
    tg,
    onClose,
    ...useUserInfo(),
  };
};
