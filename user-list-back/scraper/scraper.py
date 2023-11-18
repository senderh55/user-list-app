import requests
from time import sleep, time
import logging
from app.database import store
from app.schemas import User

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def fetch_and_store_users(batch_size, nationality, total_users):
    start_time = time()
    total_fetched = 0

    for offset in range(0, total_users, batch_size):
        try:
            # Fetch users from the API
            response = requests.get(f"https://randomuser.me/api/?results={batch_size}&nat={nationality}")
            response.raise_for_status()  # Raises an HTTPError for bad requests

            users_data = response.json()['results']

            # Store users in RavenDB
            with store.open_session() as session:
                for user_data in users_data:
                    user = User(
                        name=f"{user_data['name']['first']} {user_data['name']['last']}",
                        email=user_data['email'],
                        age=user_data['dob']['age'],
                        phone=user_data['phone'],
                        cell=user_data['cell'],
                        country=user_data['location']['country'],
                        username=user_data['login']['username'],
                        gender=user_data['gender']
                    )
                    session.store(user)
                session.save_changes()

            total_fetched += len(users_data)
            logging.info(f"Fetched {total_fetched}/{total_users} users.")

        except requests.HTTPError as http_err:
            logging.error(f"HTTP error occurred: {http_err}")
        except requests.RequestException as req_err:
            logging.error(f"Network error occurred: {req_err}")
        except Exception as e:
            logging.error(f"An error occurred: {e}")

        sleep(3)  # Sleep to avoid hitting the API rate limit

    total_time = time() - start_time
    logging.info(f"Completed fetching data. Total time: {total_time:.2f} seconds")


if __name__ == "__main__":
    fetch_and_store_users(5000, "us", 1000000)
