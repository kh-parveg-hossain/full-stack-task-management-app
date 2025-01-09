import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    //  filename: (req,file,cb)=>{
    
        filename: (req, file, cb) => {
            // Get the current date in YYYY-MM-DD format
            const currentDate = new Date().toISOString().slice(0, 10);
            // Construct a unique filename with the current date and original file name
            cb(null, `${currentDate}-${Date.now()}-${file.originalname}`);
        }
    
    
})

const upload = multer({storage:storage})
foodRouter.post('/add',upload.single('image'),addFood)
foodRouter.get('/list',listFood)
foodRouter.post('/remove', removeFood)

export default foodRouter;