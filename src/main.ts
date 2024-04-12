import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const start = async() =>{

  const PORT = process.env.PORT
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(PORT,()=>{
   console.log(`Server started at ${PORT}-PORT`);
  });
}
start()
