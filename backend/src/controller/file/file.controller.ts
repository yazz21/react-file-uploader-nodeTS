const { file } = require("../models/file.model");

module.exports = {
    
    async upload (req: any, res: any)  {
      if (req.files === null) {
          return res.status(400).json({ msg: 'No File Upload' });
      }
      console.log(req.file);
      
      const file = req.file;
   
          res.json({ fileName: file.filename, filePath: `../uploads/${file.name}` });

  },
  async create (req: any, res: any) {
    console.log('create controller: ',req.file);
    if (req.files === null) {
      return res.status(400).json({ msg: 'No File Upload' });
  }
    
    try {
        const fieldname = req.body.fieldname;
        const originalname = req.body.originalname;
        const encoding = req.body.encoding;
        const mimetype = req.body.mimetype;
        const destination = req.body.destination;
        const filename = req.body.filename;
        const path = req.body.path;
        const size = req.body.size;

      const saveToFileUpload = await file.create({
         fieldname,
         originalname, 
         encoding ,
         mimetype ,
         destination, 
         filename ,
         path ,
         size
        });

      if (saveToFileUpload) {
        res.send({
          id: saveToFileUpload.fileName
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  },
  async getAll(req: any, res: any) {
    console.log("getall");
    
    try {
      const story = await file.findAll();
      if (story) {
        res.status(200).send(story);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `The Error at file getAll..-> ${e}`,
      });
    }
  },
  async getOne(req:any, res: any) {
    try {
      const story = await file.findOne({
        where: {
          filename: req.params.filename,
        },
      });
      if (story) {
        res.status(200).send(story);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This file is already in use`,
      });
    }
  },
  async deleteFile(req: any, res: any) {
    try {
      const del = await file.destroy({
        where: {
          filename: req.params.filename
        }
      });
      if (del) {
        res.status(200).send(del);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This file is already in use`,
      });
    }
  }  

}



      
