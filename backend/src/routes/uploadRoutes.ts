
const multer = require("multer");
const fileUp = require("../controller/file.controller")

// var upload = multer({ dest: './public/images' });

const img_path = "../uploads/";
const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: (arg0: null, arg1: any) => void) => {
    cb(null, img_path);
    // cb(null, '../src/assets/');
  },
  filename: (req: any, file: { originalname: any; }, cb: (arg0: null, arg1: any) => void) => {
    try {
      cb(null, Date.now() + path.extname(file.originalname));
      // cb(null, file.fieldname + '-' + Date.now());
    } catch (error) {
      console.log(error);
    }
  },
});
const upload = multer({ storage: storage });

module.exports = (app:any) => {

  app.post("/api/file/upload", upload.single("file"), fileUp.upload)

//   app.post("/api/addstory", Story.create);
 
  app.get("/file/:title", fileUp.getOne);
  app.get("/api/story/get", fileUp.getAll);
  
 

};