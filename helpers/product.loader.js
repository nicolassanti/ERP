exports.loadProduct =async (req,res)=>{

    if (req.files === null||req.files === undefined) {
        res.status(200).json({ error: 'No file uploaded' });
    } else {
        console.log(req.files)
        res.json({ msg: 'file uploaded successfully' });
    }

}
