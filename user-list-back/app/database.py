import ssl
from ravendb import DocumentStore

url = "https://a.free.user-list.ravendb.cloud/"
database_name = "UserListDB"
certificate_path = "../app/utils/certificate.pem"  # Path to your certificate
key_path = "../app/utils/certificate.key"  # Path to your key file
ca_path = "../app/utils/ca.crt"

# Create an SSL context
ssl_context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
ssl_context.load_cert_chain(certfile=certificate_path, keyfile=key_path)
ssl_context.load_verify_locations(cafile=ca_path)
# Initialize the DocumentStore with the SSL context
store = DocumentStore(urls=[url], database=database_name)
store.certificate = ssl_context
store.initialize()

# Now you can use 'store' to interact with your database
