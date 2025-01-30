const aiPrefixes = ['AI', 'Neural', 'Deep', 'Quantum', 'Cyber', 'Tech', 'Smart', 'Logic', 'Mind', 'Brain']
const midWords = ['Flow', 'Flux', 'Sync', 'Link', 'Node', 'Core', 'Pulse', 'Wave', 'Path', 'Grid']
const suffixes = ['Labs', 'Solutions', 'Systems', 'Works', 'Studio', 'Hub', 'Space', 'Sphere', 'Matrix', 'Network']

export function generateName() {
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]
  
  const patterns = [
    () => `${getRandomElement(aiPrefixes)}${getRandomElement(midWords)}`,
    () => `${getRandomElement(aiPrefixes)}${getRandomElement(suffixes)}`,
    () => `${getRandomElement(midWords)}${getRandomElement(suffixes)}`,
    () => `${getRandomElement(aiPrefixes)}${getRandomElement(midWords)}${getRandomElement(suffixes)}`
  ]

  const pattern = patterns[Math.floor(Math.random() * patterns.length)]
  return pattern()
}
