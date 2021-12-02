exports = async (id) => {
  const mongodb = context.services.get("mongodb-atlas");
  const activityCollection = mongodb.db("crowdfinder").collection("activity");
  const query = {
    "_id": BSON.ObjectId(id)
  };

  try {
    const result = await activityCollection.deleteOne(query);
    if (result) {
      console.log('Deleted an activity');
      return result;
    }
  } catch (err) {
    console.error(`Failed to delete activity: ${err}`);
  }
}
