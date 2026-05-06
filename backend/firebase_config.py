import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate("serviceAccountKey.json")  # download from Firebase Console
firebase_admin.initialize_app(cred)

def verify_token(token: str):
    try:
        decoded = auth.verify_id_token(token)
        return decoded  # contains uid, email, etc.
    except Exception:
        return None