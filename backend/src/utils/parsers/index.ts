import validate from "uuid-validate";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isUuidString = (id: unknown): boolean => {
  return typeof id === "string" && validate(id, 4);
};

const isDate = (date: unknown): date is Date => {
  return (
    date instanceof Date ||
    (typeof date === 'object' &&
      Object.prototype.toString.call(date) === '[object Date]')
  );
};

const parseUserName = (username: unknown): string => {
  if (!username || !isString(username)) {
    throw new Error("Incorrct or missing username");
  }
  return username;
};

const parsePassword = (password: unknown): string => {
  if (!password || !isString(password)) {
    throw new Error("Incorrect or missing password");
  }
  return password;
};


const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name");
  }
  return name;
};

const parseUuid = (id: unknown): string => {
  if (!id || !isString(id) || !isUuidString(id)) {
    throw new Error("id given not uuid v4");
  }
  return id;
};


const parseDate = (date: unknown): Date => {
  if (!date || !isDate(date)) {
    throw new Error('Incorrect or missing date');
  }
  return date;
};

export default {
  parseDate,
  parseName,
  parsePassword,
  parseUserName,
  parseUuid
};