exports = async (id) => {
    const mongodb = context.services.get("mongodb-atlas");
    const activityCollection = mongodb.db("crowdfinder").collection("activity");
    const query = {"_id": BSON.ObjectId(id) };

    if(activityCollection.count() == 0) {
        return {error: '0 activity created'};
    }
        
    try {
        const result = await activityCollection.deleteOne(query);
            
        if(result) {
            console.log('Delected an activity');
            return result;
        }
    }   
    
    catch(err) {
        return {error: '$err'};
    }
}