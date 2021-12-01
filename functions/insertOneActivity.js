exports = async ({
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
  const query = {
    "name": name,
    "description": description,
    "categories": category,
    "location": {
      "latitude": latitude,
      "longitude": longitude
    }
  };

  // console.log(`Received args: ${name}, ${description}, ${category}, ${location}\n`);
  try {
    const result = await activityCollection.insertOne(query);
    console.log(`Inserted new activity`)
    return result;
  } catch(err) {
    console.error(`Failed to insert activity: ${err}`);
  }
}
