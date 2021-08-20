export const baseUrl = `https://api.airtable.com/v0/apppXkTJtcRLeIDaM/books`

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API}`
  }
}