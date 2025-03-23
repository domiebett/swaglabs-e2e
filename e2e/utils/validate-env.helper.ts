export function validateEnv(requiredVars: string[]) {
  const missing = requiredVars.filter((envVar) => !process.env[envVar]);
  
  if (missing.length > 0) {
    const message = `Missing environment variables: ${missing.join(', ')}. Check your .env file.`;
    
    throw new Error(message);
  }
}
