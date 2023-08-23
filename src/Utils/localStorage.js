export const GetLocal = (key) => {
    try {
        return JSON.parse(sessionStorage.getItem(key));
    }
    catch (e) {
        return null;
    }
}

export const SetLocal = (key, value) => {
    return sessionStorage.setItem(key, JSON.stringify(value));
}

export const SetRemove = (key) => {
  return sessionStorage.removeItem(key);
};