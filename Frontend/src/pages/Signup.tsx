import Auth from "../components/Auth";
import Quote from "../components/Quote";

export function Signup() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* On small screens: 1 column (grid-cols-1). 
      On large screens and up (lg:): 2 columns (grid-cols-2)
    */}
      <div>
        <Auth type="signup" />
      </div>
      <div
        className="hidden
           lg:block"
      >
        {/* Tailwind yeh maanta hai ke sabse chhoti screen (mobile) ke liye styling sabse pehle lagti hai. Phir jaise jaise screen badi hoti hai (md, lg, xl...), aap styling ko override kar sakte ho */}
        <Quote />
      </div>
    </div>
  );
}
