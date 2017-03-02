import Realm from 'realm';
const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string', // primary key
    faved_on: 'date'
  }
};
export const FaveQuery = (realm) => {
  return realm.objects('Fave').map((fave) => fave.id);
}
export const FaveDelete = (realm, favId) => {
  const Id = favId
  const Faves = realm.objects('Fave');
  realm.write(() => {
    realm.delete(deleteFave);
  })
}

export const FaveUpdate = (realm, id) => {

  realm.write(() => {
    realm.create('Fave', {
      id,
      faved_on: new Date()
    });
  })
}
export const FaveToggle = (realm, id) => {
  const FaveArray = realm.objects('Fave').map((fave) => fave.id);
  if (FaveArray.includes(id)) {
    FaveDelete(realm, id)
  }
  else {
    FaveUpdate(realm, id)

  }
}
export default new Realm({ schema: [Fave] });