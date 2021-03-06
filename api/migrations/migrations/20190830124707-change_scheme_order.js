module.exports = {
  up(db) {
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    return db.collection("orders").update(
      {},
      {
        $set: {
          spam: false
        }
      },
      {
        upsert: false,
        multi: true
      }
    );
  },

  down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    return db.collection("orders").update(
      {},
      {
        $unset: {
          spam: ""
        }
      },
      {
        upsert: false,
        multi: true
      }
    );
  }
};
