const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema ({
	imageId: {type: String},
	length: {type: String},
	chunkSize: {type: Number},
	uploadDate: {type: String},
	filename: {type: String},
	md5: {type: String},
	contentType: {type: String},
});

module.exports = mongoose.model('ImageModel', ImageSchema);
