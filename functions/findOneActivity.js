exports = async (id) => {
  const mongodb = context.services.get("mongodb-atlas");
  const activityCollection = mongodb.db("crowdfinder").collection("activity");
  const query = { "_id": BSON.ObjectId(id) };

  try {
    const result = await activityCollection.findOne(query);
    console.log(`Found matched activity`)
    return result;
  } catch(err) {
    console.error(`Failed to find activity: ${err}`);
  }
}
