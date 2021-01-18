const dateOptions = {
  dateStyle: "short",
  timeStyle: "long",
  hour12: true
};

export const getFormattedCurrentDate = () =>
  new Intl.DateTimeFormat("en", dateOptions).format(new Date());
