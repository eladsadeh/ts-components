export const changeObjectKey = (object: Record<string, any>, oldKey: string, newKey: string) => {
  if (oldKey === newKey || !!object.oldKey) return

  if (object.newKey) {
    console.log('Key already exists!');
    return object;
  }

  const newObject = {};
  delete Object.assign(newObject, object, {[newKey]: object[oldKey] })[oldKey];

  return newObject;
}
