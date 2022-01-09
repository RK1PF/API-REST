const Articles = require("../models/Articles");

exports.get = async (req, res) => {
  const articles = await Articles.find();
  try {
    res.send(articles);
  } catch (e) {
    res.statusCode(500).send(e);
  }
};

exports.post = async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const article = new Articles({
    title: title,
    content: content,
  });
  article.save().then(() => {
    console.log(`New article: ${title}`);
    res.redirect("/articles");
  });
};

exports.delete = async (req, res) => {
  Articles.deleteMany({}).then(res.redirect("/articles"));
};

exports.getOne = async (req, res) => {
  console.log(req.params);
  const article = await Articles.findOne({ title: req.params.title });
  try {
    res.send(article);
  } catch (e) {
    res.statusCode(500).send(e);
  }
};

exports.put = async (req, res) => {
  Articles.replaceOne(
    { title: req.params.title },
    {
      title: req.body.title,
      content: req.body.content,
    }
  ),(err)=>{
    if (!err){
        console.log(`Put article with the title of: ${req.params.title} `);
        res.redirect("/articles")
    } else {
        res.send(err)
    }
  };
};

exports.patch = async (req, res) => {
  Articles.updateOne(
    { title: req.params.title },
    {
      title: req.body.title,
      content: req.body.content,
    }
  ),(err)=>{
    if (!err){
        console.log(`Patch article with the title of: ${req.params.title} `);
        res.redirect("/articles")
    } else {
        res.send(err)
    }
  };
};

exports.deleteOne = async (req, res) => {
  Articles.deleteOne({ title: req.params.title }, (err) => {
    if (!err){
        console.log(`Delete article with the title of: ${req.params.title} `);
        res.redirect("/articles")
    } else {
        res.send(err)
    }
  });
};
