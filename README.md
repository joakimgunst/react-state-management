# React State Management

Comparison of different approaches to managing global state in React apps.

## Database

The async examples require a Postgres database with the following schema:

```pgsql
CREATE TABLE "todos" (
    "id" varchar NOT NULL,
    "text" text NOT NULL,
    "completed" bool NOT NULL DEFAULT false,
    PRIMARY KEY ("id")
);
```

To connect to the database, add the following environment variables:

```
PGHOST
PGUSER
PGPASSWORD
PGDATABASE
```
