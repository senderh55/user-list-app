from ravendb import DocumentStore

url = "https://a.free.user-list.ravendb.cloud/"
databaseName = "UserListDB"

store = DocumentStore(url, databaseName)
store.initialize()
