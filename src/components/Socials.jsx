import Link from "next/link";
import {FaGithub, FaLinkedin, FaTwitter, FaFacebook} from "react-icons/fa"

const socials=[
    {icon:<FaGithub/>, path:"https://github.com/edemdev7"},
    {icon:<FaLinkedin/>, path:"https://www.linkedin.com/in/edem-kpomachi-7b2189264/"},
    {icon:<FaTwitter/>, path:"https://x.com/EkpomachiE"},
    {icon:<FaFacebook/>, path:"https://www.facebook.com/casimiredem.madetinkpomachi.9"},
];

const Socials = ({containerStyles, iconStyles}) =>{
    return(
        <div className={containerStyles}>
            {socials.map((item,index)=>{
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
};

export default Socials;