import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import corsOptions from './src/config/cors';
import Container from 'typedi';
import StudentController from './src/controllers/StudentControllers';
import DepartmentController from './src/controllers/DepartmentController';
import TransactionController from './src/controllers/TransactionController';
import NutecController from './src/controllers/NutecController';
require("dotenv").config()

const app = express();
const port = String(process.env.PORT) || 3030;
      
// Set up your routes and middleware here
app.use(cors(corsOptions));
app.use(express.urlencoded({limit:"50mb", extended: false}))
app.use(express.json({limit:"50mb"}))

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }))
     
// Run MongoDB
mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/nuesa-backend2`)
const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')});
      
//render the html file
app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});

const studentController = Container.get(StudentController);
app.post("/sign-in", (req: Request, res: Response, next: NextFunction)=> studentController.signIn(req, res))
app.post("/sign-up", (req: Request, res: Response)=> studentController.signUp(req, res))

const departmentController = Container.get(DepartmentController);
app.get("/departments", (req: Request, res: Response, next: NextFunction)=> departmentController.getAll(req, res))
app.get("/add-departments", (req: Request, res: Response, next: NextFunction)=> departmentController.addAllDepartments(req, res))


const nutecControler = Container.get(NutecController);
app.post("/nutec", (req: Request, res: Response, next: NextFunction)=> nutecControler.register(req, res))
app.get("/nutec", (req: Request, res: Response, next: NextFunction)=> nutecControler.getAll(req, res))

// Transactions
const transactionController = Container.get(TransactionController);
app.post("/transaction", (req: Request, res: Response, next: NextFunction)=> transactionController.createTransaction(req, res))
app.get("/transaction/:ref", (req: Request, res: Response, next: NextFunction)=> transactionController.getByRef(req, res))      

// Run Server
app.listen(port, () => {
console.log(`Server running on port ${port}`);
      
  });
        