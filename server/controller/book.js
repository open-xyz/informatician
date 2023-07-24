const Book = require('../model/Book')

exports.addBook = async(req,res)=>{
    const newBook = new Book(req.body);
    console.log(newBook);
    try{
        const isBookexist = await Book.findOne(req.body);
        if(isBookexist){
            res.status(409).json({error: "Book Already Existed"})
        }
      const savedBook = await newBook.save();
      res.status(201).json(savedBook._id);
    } catch (err) {
      res.status(500).json(err);
    }
}

exports.getAllBooks = async(req,res)=>{
    try{
        const allBooks = await Book.find();
        return res.status(200).json(allBooks);
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.getABook = async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
        return res.status(200).json(book);
    }catch(err){
        return res.status(500).json(err)
    }
}
exports.updateBook = async(req,res)=>{
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, {$set: req.body}, {$new: true});
        res.status(200).json({status: "Book details has been updated!",data: book})
    }
    catch(err){
        return res.status(500).json(err);
    }
}

exports.deleteBook = async(req,res)=>{
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json("Book details has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
}

exports.findbycategory=async(req,res)=>{
    const category = req.params.category;
    try {
        const books = await Book.find({ category: category });
        console.log(books)
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
