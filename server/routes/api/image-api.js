const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const express = require('express');
const bodyParser = require('body-parser');
// const router = require('express').Router();
const axios = require('axios');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('../../../config/config');
const mongoURI = config.db;
const conn = mongoose.createConnection(mongoURI);

let gfs;

conn.once('open', ()=> {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
})

const storage = new GridFsStorage({
  url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads',
            metadata: {
              productName: file.originalname.slice(0,-4),
              ownBy: "Vegreen"
            }
          };
          resolve(fileInfo);
        });
      });
    }
});

const upload = multer({ storage }).single('file');

module.exports = (app) => {

// Upload images
app.post('/api/upload/', upload, (req, res) => {
    console.log("<<=======================>>");
    console.log(req.file)
    console.log("<<=======================>>");
    console.log(req.file.filename)
  // axios.put('/api/products' + id, {"images" : res.req.file.id});
return res.json({successful: req.file.filename});
});

// Get single image
app.get('/api/image/:filename', (req, res) =>{
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
    if(!file || file.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    // Check if image
    if(file.contentType === 'image/png' || file.contentType === 'image/jpeg' || file.contentType === 'image/gif'){
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
      } else {
      res.status(404).json({
        err: 'Not an image'
      })
    }
  })
});


// Get all files
app.get('/api/afiles', (req, res) =>{
  gfs.files.find().toArray((err, files)=>{
    // Check if files
    if(!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    //Files exist
    return res.json(files);
  });
});

// Delete a file
app.delete('/api/delete/:filename', (req, res) =>{
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
    if(!file || file.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    // Check if image
    if(file || file.length > 0){
      gfs.files.deleteOne({filename: req.params.filename}, (info) => {
        console.log("deteled")
        console.log(res.json({info: "delete complete"}))
      })
    }
  })
});

app.delete('/api/deletebyid/:_id', (req, res) =>{
  gfs.files.findOne({_id: req.params._id}, (err, file) => {
    if(!file || file.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    // Check if image
    if(file || file.length > 0){
      gfs.files.deleteOne({_id: req.params._id}, (info) => {
        console.log(res.json({info: "delete complete"}))
      })
    }
  })
});

}; //end module
