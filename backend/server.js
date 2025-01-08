import express  from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import contactRouter from "./routes/contactRoute.js";
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import 'dotenv/config'

// app config
const app = express()
const port = process.env.PORT || 4000;


// middlewares
app.use(express.json())
<<<<<<< HEAD
app.use(cors());
=======
app.use(cors())
>>>>>>> b71c288350e0769b1de5224297ecc13d9c6bc3ab

// db connection
connectDB()

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)
app.use('/api/contact', contactRouter);

app.get("/", (req, res) => {
    res.send("API Working")
  });
  

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))