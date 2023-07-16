import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // PassportStrategyが返すクラスが持っているコンストラクタ
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'hogehoge',
    });
  }
  async validate(payload: JwtPayload) {
    // この時点で認証期限切れとかは自動で見ている
    return payload;
  }
}
