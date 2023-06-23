import validate from "uuid-validate";

export const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const isUuidString = (id: unknown): boolean => {
  return typeof id === "string" && validate(id, 4);
};

export const isDate = (date: unknown): date is Date => {
  return (
    date instanceof Date ||
    (typeof date === 'object' &&
      Object.prototype.toString.call(date) === '[object Date]')
  );
};