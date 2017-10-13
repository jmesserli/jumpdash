export function generateIdIfAbsent(id, otherValue) {
  return id || (
    otherValue && otherValue.replace(/[^\w\d]+/g, '-')
      .replace(/(^-+|-+$)/g, '')
      .toLowerCase()
  );
}
