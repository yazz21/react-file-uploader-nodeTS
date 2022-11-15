const { file } = require("../models/file.model");

module.exports = {
    async create(req: { body: { title: any; }; }, res: { send: (arg0: { id: any; }) => void; }) {
        try {
          console.log(req.body);
    
          const title = req.body.title;
          const saveToFileUpload = await file.create({
            title
    
          });
    
          if (saveToFileUpload) {
            res.send({
              id: saveToFileUpload.id
            });
          }
        } catch (error) {
          console.log("error", error);
        }
      },

      async getAll(req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { error: string; }): void; new(): any; }; }; send: (arg0: { found: boolean; }) => void; }) {
        // console.log('getAll story' + req);
        try {
          const story = await file.findAll();
          if (story) {
            res.status(200).send(story);
            console.log(res);
          } else {
            res.send({ found: false });
          }
        } catch (e) {
          res.status(400).send({
            error: `The Error at file getAll..-> ${e}`,
          });
        }
      },

      async getOne(req: { params: { title: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { error: string; }): void; new(): any; }; }; send: (arg0: { found: boolean; }) => void; }) {
        // console.log("getOne story" + req.params);
        try {
          const story = await file.findOne({
            where: {
              title: req.params.title,
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
    async upload (req: any , res: any )  {
      if (req.files === null) {
          return res.status(400).json({ msg: 'No File Upload' });
      }
      const file = req.files.file;
      file.mv(`${__dirname}/uploads/${file.name}`, (err: any) => {
          if (err) {
              console.log(err);
              return res.status(500).send(err);
          }
          res.json({ fileName: file.name, filePath: `../uploads/${file.name}` });
      });

      try {
        console.log(req.body);
  
        const title = req.body.title;
        const saveToFileUpload = await file.create({
          title
  
        });
  
        if (saveToFileUpload) {
          res.send({
            id: saveToFileUpload.id
          });
        }
      } catch (error) {
        console.log("error", error);
      }
  }
}