import HeroTypography from "./HeroTypography"

const Hero = () => {
    return (
        <div className="h-screen relative">
            

            <HeroTypography />
        
            <div className="h-screen">
                <img
                    src="src/assets/hero-2.jpg"
                    alt=""
                    className="object-cover h-full w-full" />

            </div>
        </div>
    )
}

export default Hero