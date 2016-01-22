var Movie = require('./../models/movie.js');
exports.movieAdd = function(req, res) {
	if (req.params.name) {//update
		return res.render('movie', {
			title: req.params.name + '|电影|管理|movie.me',//
			label: '',
		});
	}else{}
};