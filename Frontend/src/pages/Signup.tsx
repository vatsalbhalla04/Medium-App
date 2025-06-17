import Auth from "../components/Auth";
import Quote from "../components/quote";

export function Signup(){
    return (
        <div className="grid grid-cols-2">
           <div>
            <Auth type="signup"/>
           </div>
           <div className="invisible lg:visible">
            {/* Tailwind yeh maanta hai ke sabse chhoti screen (mobile) ke liye styling sabse pehle lagti hai. Phir jaise jaise screen badi hoti hai (md, lg, xl...), aap styling ko override kar sakte ho */}
           <Quote/>
           </div>
        </div>
    )
}