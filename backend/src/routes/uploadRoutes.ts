
const multer = require("multer");
const fileUp = require("../controller/file.controller")

// var upload = multer({ dest: './public/images' });

// const img_path = "../uploads/";
// const storage = multer.diskStorage({
//   destination: (req: any, file: any, cb: (arg0: null, arg1: any) => void) => {
//     cb(null, img_path);
//     // cb(null, '../src/assets/');
//   },
//   filename: (req: any, file: { originalname: any; }, cb: (arg0: null, arg1: any) => void) => {
//     try {
//       cb(null, Date.now() + path.extname(file.originalname));
//       // cb(null, file.filename + '-' + Date.now());
//     } catch (error) {
//       console.log(error);
//     }
//   },
// });
// const upload = multer({ storage: storage });

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: (req: any, file:any, cb: any) => {
//             cb(null,"./")
//         },
//         filename: (req: any, file:any, cb: any) => {
//             cb(
//                 null,
//                 file.filename + "-" + Date.now() + "-" + file.originalname
//             )
//         }
//     })
// })

const storage = multer.diskStorage({
    destination: function (req:any, file: any, cb: any) {
      cb(null, 'uploads/' )
    },
    filename: function (req:any, file: any, cb: any) {
      const uniqueSuffix = Date.now()
      cb(null, file.filename + '-' + uniqueSuffix + file.originalname)
    }
  })

 // Multer Filter
// const multerFilter = (req:any, file: any, cb: any) => {
    // if (file.size >) {
    //   cb(null, true);
    // } else {
    //   cb(new Error("Not a PDF File!!"), false);
    // }
//   };
  
  const upload = multer({ storage: storage,limits:{
    fileSize: 12000000
} } )

module.exports = (app:any) => {

  app.post("/api/file/upload", upload.single("file"), fileUp.upload)
 
  app.get("/api/file/getall", fileUp.getAll);
  app.get("/api/file/:filename", fileUp.getOne);
  app.post("/api/file/create", fileUp.create);
  app.delete("/api/file/:filename", fileUp.delete);
  
  
 

};



