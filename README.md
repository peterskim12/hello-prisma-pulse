# hello-prisma-pulse
Hello Prisma app /w Pulse

* Clone repo

`git clone https://github.com/peterskim12/hello-prisma-pulse.git`

* Download dependencies

`npm i`

* Set up your database to work with Pulse.

* Go to Prisma Data Platform, create a new Cloud Project, save API key that it provides, and configure Pulse in that project with a database connection string.

* Add PDP API key in `listen.ts`

* [Add DATABASE_URL](https://www.prisma.io/docs/guides/development-environment/environment-variables#using-env-files) to a new `.env` file that you create

* Create first Prisma migration

`prisma migrate dev --name init`

* Start listener

`npm run listen`

* Run app to add records

`npx ts-node index.ts`
