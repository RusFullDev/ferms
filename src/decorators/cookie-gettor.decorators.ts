import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const CookieGetter = createParamDecorator(
  async (data: string, context: ExecutionContext): Promise<string> => {
    const request = context.switchToHttp().getRequest()
    console.log(request);
    
    console.log('2');
    
    const refreshToken = request.cookie[data]
    console.log('3');
    
    if(!refreshToken){
        throw new UnauthorizedException('Token is not found')
    }
    return refreshToken
  },
);
