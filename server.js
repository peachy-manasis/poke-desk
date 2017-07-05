const app = express();

app.use(cors());

app.set("port", process.env.PORT || 3001);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
};

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});