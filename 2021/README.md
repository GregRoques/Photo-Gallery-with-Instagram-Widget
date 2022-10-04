# Personal Portfolio Site

# Description

Revamped personal website (www.GregRoques.com).

# Technologies

- React
- Node/Express
- HTML/CSS/JavaScript

## Ignored Files

### Front-end – Dependency Folder:

- BackendAPI.js
  - Includes grAPI (to access my backend server)
  - trackingID (for Google Analytics)
  - contactInfo (phone # and email for footer)

```
export const grAPI = "MY_WEBSITE"
export const trackingId = "MY_GOOGLE_ANALYTICS_TRACKING_ID";
export const myContactInfo = {
    phone: "PHONE_NUMBER",
    email: "EMAIL"
}
```

### Back-end – Util Folder

- linkedInList.js (currated list of LinkedIn recommendations)

```
[
  {
    name: "STRING",
    title: "STRING",
    workedWith: "STRING",
    recommendation: "STRING",
  },
    etc.
]
```

- instaToken.json

```
{
  "access_token": "",
  "token_type": "bearer",
  "expires_in_five_days": 0, // five days before fb expiration in milliseconds
  "is_expired": 0, // fb for developers expiration date in milliseconds
  "user_name": ""
}
```
