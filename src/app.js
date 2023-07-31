import express from "express";
import indexRoutes from "./routes/index.routes.js";
import { engine } from "express-handlebars"
import path from "path";
import morgan from "morgan";

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main.hbs",
    extname: ".hbs",
}));

app.set('view engine', '.hbs');

// Midleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

// exports
export default app;

// static files
app.use(express.static(path.join(__dirname, 'static')));