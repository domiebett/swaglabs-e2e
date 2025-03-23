export function validateEnv(requiredVars: string[]) {
  const missing = requiredVars.filter((envVar) => !process.env[envVar]);
  
  console.log('\n--------------------------------');
  console.log('Validating your env variables...');
  console.log('--------------------------------');

  if (missing.length > 0) {
    const message = `Missing environment variables: ${missing.join(', ')}. Make sure you have a .env file in the root of the project with the required variables.`;
    
    throw new Error(message);
  }
}
