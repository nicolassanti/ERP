
async function pagination(model) {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page-1)*limit;
    const endIndex = page*limit
    const cantDocs=await model.countDocuments().exec()

    const pages = Math.ceil(cantDocs/limit)
    const results = {}
    
    try {
        results.results = await model.find().limit(limit).skip(startIndex).exec()
        res.paginatedResults = results
        next()
      } catch (e) {
        res.status(500).json({ message: e.message })
      }



    if (page<pages) {
        results.next={
            pages,
            page:page++,
            limit
        }       
    }
    if (startIndex>0) {
        results.previous={
            pages,
            page:page--,
            limit
        }
    }

}
module.exports=pagination