exports = async ({
    id,
    name,
    description,
    categories: [
      ...category
    ],
    location: {
      latitude, longitude
    }
  }) => {
    const mongodb = context.services.get("mongodb-atlas");
    const activityCollection = mongodb.db("crowdfinder").collection("activity");
    const search = { "_id": BSON.ObjectId(id) };
    const query = {
        "$set": {
            "name": name,
            "description": description,
            "categories": category,
            "location": {
            "latitude": latitude,
            "longitude": longitude
            }
        }
      };
    const opt = {"upsert": false};

    if(activityCollection.count() == 0) {
        return {error: '0 activity created'};
    }
        
    try {
        const result = await activityCollection.updateOne(search, query, opt);
            
        if(result) {
            const {matchedCount, modifiedCount} = result;
            if(matchedCount && modifiedCount)
            {
                console.log('Update an activity');
                return result;
            }
            
        }
    }   
    
    catch(err) {
        return {error: '$err'};
    }
}