import React, { useState } from 'react'
import { generateName } from './utils/nameGenerator'
import { checkAvailability } from './utils/nameChecker'

function App() {
  const [names, setNames] = useState([])
  const [loading, setLoading] = useState(false)

  const generateNames = async () => {
    setLoading(true)
    const newNames = []
    
    for (let i = 0; i < 5; i++) {
      const name = generateName()
      const available = await checkAvailability(name)
      newNames.push({ name, available })
    }

    setNames(newNames)
    setLoading(false)
  }

  const getDomainUrl = (name) => {
    const domainName = name.toLowerCase().replace(/\s+/g, '')
    return `https://www.namecheap.com/domains/registration/results/?domain=${domainName}`
  }

  return (
    <div className="container">
      <h1>AI Agency Name Generator</h1>
      <button onClick={generateNames} disabled={loading}>
        {loading ? '✨ Generating...' : '✨ Generate Names'}
      </button>

      <div className="name-list">
        {names.map((item, index) => (
          <a 
            key={index} 
            href={getDomainUrl(item.name)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="name-card"
          >
            <h2>{item.name}</h2>
            <p>{item.available ? '✅ Domain Available' : '❌ Domain Taken'}</p>
            <span className="check-domain">Check Domain →</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
