import { PrismaClient as prisma } from "@prisma/client";
import { withPulse } from "@prisma/extension-pulse";

const apiKey = "<INSERT_APIKEY_HERE>";

const PrismaClient = new prisma().$extends(withPulse({ apiKey: apiKey }));

export default PrismaClient;

async function main() {
  const subscription = await PrismaClient.user.subscribe({});

  if (subscription instanceof Error) {
    throw subscription;
  }

  for await (const event of subscription) {
    console.log("just received an event:", event);
  }
}

main();
