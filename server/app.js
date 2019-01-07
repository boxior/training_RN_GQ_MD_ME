const express = require(`express`);
const bodyParser = require(`body-parser`);
const graphqlHttp = require(`express-graphql`);
const mongoose = require(`mongoose`);

const app = express();

const graphQlSchema = require(`./schemas/index`);
// const graphQlResolvers = require(`./graphql/resolvers/index`);

app.get(`/`, (req, res, next) => {
    res.send(`Hello world`);
});

app.use(bodyParser.json());

app.use(`/graphql`, graphqlHttp({
    schema: graphQlSchema,
    // rootValue: graphQlResolvers,
    // graphiql: process.env.NODE_ENV === "development" //undefined
    graphiql: true
}));

mongoose.connect(`mongodb+srv://boxior:wJ8xSxytsJPIXfqb@cluster0-4ziv6.mongodb.net/FindMate?retryWrites=true`,
    {useNewUrlParser: true}
)
    .then(() => {
        app.listen(4000);
    })
    .catch((err) => {
        console.error(`err`, err);
    });

