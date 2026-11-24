import os
import requests
from dotenv import load_dotenv

load_dotenv()

URL = "https://reddit3.p.rapidapi.com/v1/reddit/search"

HEADERS = {
    "x-rapidapi-key": os.getenv("RAPIDAPI_KEY"),
    "x-rapidapi-host": os.getenv("RAPIDAPI_HOST")
}

def search_reddit(query: str, time_filter: str = "year", sort_type: str = "relevance"):

    params = {
        "search": query,
        "timeFilter": time_filter,
        "sortType": sort_type
    }

    response = requests.get(
        URL,
        headers=HEADERS,
        params=params,
        timeout=30
    )

    response.raise_for_status()

    return response.json()