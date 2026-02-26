# DT210G - lab 2
## API för att hantera todo-lista

Repot innehåller källkod för ett API som hanterar todo-objekt. API:et är kopplat till en MongoDb databas och använder Mongoose. Det är skapat med ramverket Hapi och publicerat på Render.

### Router

| Metod     | Route | Resultat |
|-----------|-------|----------|
| GET       | /todo | Hela todo-listan |
| POST      | /todo | Lägga till ny todo |
| PUT       | /todo/{id} | Redigera todo |
| DELETE    | /todo/{id} | Ta bort todo |

**Kim Dudenhöfer, 2026-02-26**
