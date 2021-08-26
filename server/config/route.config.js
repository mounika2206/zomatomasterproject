/*import Jwtpassport from "passport-jwt";
import{UserModel} from "../database/user";
const JWTStrategy=Jwtpassport.Strategy;
const ExtractJwt=Jwtpassport.ExtractJwt;
const options={

    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secret0rKey:"ZomatoAPP",
};
export default (passport)=>{

    passport.use(
        new JWTStrategy(options,async(jwt__payload,done)=>{
    
    
        try
          {
        const doesuserexist=UserModel.findById(jwt__payload.user);
        if(!doesuserexist) return done(null,false);
        return done(null,doesuserexist);

              }
              catch(error)
              {
                  throw new Error(error);
              }
            })
    );
 }*/



 import JwtPassport from "passport-jwt";

// Database Model
import { UserModel } from "../database/user";

const JWTStratergy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoAPP",
};

export default (passport) => {
  passport.use(
    new JWTStratergy(options, async (jwt__payload, done) => {
      try {
        const doesUserExist = UserModel.findById(jwt__payload.user);
        if (!doesUserExist) return done(null, false);

        return done(null, doesUserExist);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};