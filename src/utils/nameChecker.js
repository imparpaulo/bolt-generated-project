import axios from 'axios'

export async function checkAvailability(name) {
  try {
    // Using DuckDuckGo as it's more lenient with CORS
    const response = await axios.get(`https://api.duckduckgo.com/`, {
      params: {
        q: name,
        format: 'json'
      }
    })
    
    // Consider name available if no related results found
    return !response.data.RelatedTopics?.length
  } catch (error) {
    // If API fails, return true to not block the flow
    return true
  }
}
