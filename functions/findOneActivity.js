exports = async(id) =>{
  const mongodb = context.services.get("mongodb-atlas");
  const crowdfinderCollection = mongodb.db("crowdfinder").collection("activity");

  const query = { "_id": BSON.ObjectId(id) };

  if (crowdfinderCollection.count() > 0) {
    try {
      const result = await crowdfinderCollection.findOne(query);

      if (result) {
        console.log("Successfully found the activity: ${result}.");
        return findActivity;
      } else {
        console.log("The activity not found!");
      }
    } catch(err) {
      console.log("Failed to find activity: ${err}");
    }
  } else {
    console.error("No activity nearby");
  }
}
