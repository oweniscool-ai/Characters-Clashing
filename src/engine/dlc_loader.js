export async function loadDLC(fileIndex) {
  return await import(`../../files_9000_10000/dlc_${fileIndex}.js`);
}
