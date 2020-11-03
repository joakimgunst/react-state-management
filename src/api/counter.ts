let counter = 0;

export async function incrementCounter() {
  await sleep(200);
  counter += 1;
}

export async function getCounterValue() {
  await sleep(200);
  return counter;
}

async function sleep(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}
