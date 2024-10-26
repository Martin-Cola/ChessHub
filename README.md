Eseguire i container:

```bash
docker compose up -d
```

Stoppare i container:

```bash
docker compose down
```

Accedere a postgres:

```bash
docker exec -it postgres psql -U martin
```

Accedere a mysql:

```bash
docker exec -it mysql mysql -p
```

Sincronizzare il database con lo schema di prisma:

```bash
npx prisma db push
```
