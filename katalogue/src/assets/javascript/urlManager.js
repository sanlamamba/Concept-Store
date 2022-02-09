export const URL_CODER = (title) => {
  return String(title).split(" ").join("-");
};

export const URL_DECODER = (title) => {
  return String(title).split("-").join(" ");
};
