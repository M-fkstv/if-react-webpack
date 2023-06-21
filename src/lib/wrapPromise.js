export async function wrapPromise(promise) {
  try {
    return await promise;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
