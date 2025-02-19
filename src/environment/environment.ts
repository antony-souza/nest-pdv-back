import * as dotenv from 'dotenv';
dotenv.config();

class Environment {
  public readonly mongourl: string = process.env.MONGO_URL;
  public readonly port: number = parseInt(process.env.PORT);
  public readonly uploadServiceType: string = process.env.UPLOAD_SERVICE_TYPE;
}

export const environment = new Environment();
