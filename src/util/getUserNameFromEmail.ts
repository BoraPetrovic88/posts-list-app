export const getUserNameFromEmail = (email: string): string => {
  let userName = "";
  if (email) {
    userName = email.substring(0, email.lastIndexOf("@"));
  }
  return userName;
};
