import dotenv from 'dotenv';
import express from 'express';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notfound from './middleware/notfound.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//middleware
//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false})); //allow us to send form data
app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts);

app.use(notfound); // handles if endpoint not found
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port 3000`);
});
