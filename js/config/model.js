import Realm from 'realm';
const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string', // primary key
    faved_on: 'date'
  }
};
export const FaveQuery = () => {
  return realm.objects('Fave')
}
export const FaveDelete = (favId) => {
  const Faves = realm.objects('Fave');
  const deleteFave = Faves.filtered('id == favId')
  realm.write(() => {
    realm.delete(deleteFave);
  })
}

export const FaveUpdate = (id) => {
  realm.write(() => {
    realm.create('Fave', {
      id,
      date: Date.now()
    });
  })
}

export default new Realm({ schema: [Fave] });