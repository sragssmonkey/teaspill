import requests
from fastapi import FastAPI, HTTPException
from app.integrations.reddit import search_reddit

app = FastAPI(title="Tea Spill API")

@app.get("/")
def home():
    return {"message": "Tea Spill API is running"}

@app.get("/api/reddit/search")
def reddit_search(query: str):

    try:
        data = search_reddit(query)
        return data

    except requests.RequestException as e:
        raise HTTPException(status_code=502, detail=str(e))