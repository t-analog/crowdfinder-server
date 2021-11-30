exports = async (id) => {
    const mongodb = context.services.get("mongodb-atlas");
    const postCollection = mongodb.db("crowdfinder").collection("activity");
    const query = {"_id": BSON.ObjectId(id) };

    try {
        const activityToRemove = await postCollection.deleteOne(query);
        console.log('Delected 1 activity');
        return activityToRemove;
    }   catch(err) {
        console.error('Failed to delete activity: ${err}');
    }
}