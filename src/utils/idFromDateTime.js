const unicId = () => {
  // let id = '';
  const date = new Date();
  const yyy = date.getFullYear();
  const month = date.getMonth();
  const dd = date.getDate();
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();
  return `${
    yyy}${
    month < 10 ? "0" + `${month}` : `${month}`}${
    dd < 10 ? "0" + `${dd}` : `${dd}`}-${
    hh < 10 ? "0" + `${hh}` : `${hh}`}${
    mm < 10 ? "0" + `${mm}` : `${mm}`}${
    ss < 10 ? "0" + `${ss}` : `${ss}`
  }`;
};

export { unicId };
