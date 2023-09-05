/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9y776nqseehf8hk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wc43dfdj",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9y776nqseehf8hk")

  // remove
  collection.schema.removeField("wc43dfdj")

  return dao.saveCollection(collection)
})
