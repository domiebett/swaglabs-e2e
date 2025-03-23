import * as dotenv from 'dotenv';
import { validateEnv } from './utils/validate-env.helper';

export default async function globalSetup() {
  dotenv.config();

  validateEnv(['STANDARD_USERNAME', 'STANDARD_PASSWORD']);
}

dotenv.config();
