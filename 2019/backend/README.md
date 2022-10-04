# Note

- instaToken.json expiration fields each take a Unix Epoch (Timestamp) number:
  - **is_expired:** Unix Epoch expiration provided by Instagram; token expires after 60 days.
  - **expires_in_five_days:** Instragram Unix Epock expiration date minus five days in milliseconds (432000000)

You can also calculate these values on your own:

```
const fiftyFiveDays = new Date().getTime() + 4752000000 // expires_in_five_days
const sixtyDays = new Date().getTime() + 5184000000 // is_expired
```
