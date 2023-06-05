# hello-prisma-pulse
Hello Prisma app /w Pulse

1. Clone repo
`git clone https://github.com/peterskim12/hello-prisma-pulse.git`

1. Download dependencies
`npm i`

1. Set up your database to work with Pulse.

1. Go to Prisma Data Platform, create a new Cloud Project, save API key that it provides, and configure Pulse in that project with a database connection string.

1. Add PDP API key in `listen.ts`

1. [Add DATABASE_URL](https://www.prisma.io/docs/guides/development-environment/environment-variables#using-env-files) to a new `.env` file that you create

1. Create first Prisma migration
`prisma migrate dev --name init`

1. Start listener
`npm run listen`

1. Run app to add records
`npx ts-node index.ts`
