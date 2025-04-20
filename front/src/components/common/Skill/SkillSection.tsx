import { Heading } from "@radix-ui/themes";
import { SkillModel } from "../../../model/Skill";
import { SkillGrid } from "./SkillGrid";
import cLogo from "../../../../public/C_Programming_Language.svg.png"
import bashLogo from "../../../../public/full_colored_dark.png"
import goLogo from "../../../../public/Go_Logo_Blue.svg.png"
import cppLogo from "../../../../public/ISO_C++_Logo.svg.png"
import csharpLogo from "../../../../public/Logo_C_sharp.svg.png"
import nixLogo from "../../../../public/Nix_Snowflake_Logo.svg"
import phpLogo from "../../../../public/PHP-logo.svg.png"
import tsLogo from "../../../../public/Typescript_logo_2020.svg.png"
import jsLogo from "../../../../public/Unofficial_JavaScript_logo_2.svg.png"
import pythonLogo from "../../../../public/pythoned.png"

export const SkillSection = () => {

    const languageSkills: SkillModel[] = [
        {name:"Go", imgUrl:goLogo},
        {name:"Python", imgUrl:pythonLogo},
        {name:"C", imgUrl:cLogo},
        {name:"C++",imgUrl:cppLogo},
        {name:"C#", imgUrl:csharpLogo},
        {name:"SH/Bash", imgUrl:bashLogo},
        {name:"SQL", imgUrl:"https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png"},
        {name:"Java", imgUrl:"https://img.icons8.com/color/512/java-coffee-cup-logo.png"},
        {name:"HTML/CSS", imgUrl:"https://dyma.fr/_next/image?url=%2Fimages%2Fformations%2Fhtml-css%2F240x240.png&w=640&q=100"},
        {name:"PHP", imgUrl:phpLogo},
        {name:"TypeScript", imgUrl:tsLogo},
        {name:"JavaScript", imgUrl:jsLogo},
        {name:"Nix", imgUrl:nixLogo},
    ]

    const toolSkills: SkillModel[] = [
        {name:"Git", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"},
        {name:"Linux", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png"},
        {name:"Postman", imgUrl:"https://cdn.worldvectorlogo.com/logos/postman.svg"},
        {name:"Hoppscotch", imgUrl:"https://hoppscotch.com/images/logo-primary-dark.svg"},
        {name:"Selenium", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png"},
        {name:"VSCode", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"},
        {name:"Vim/Neovim", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1200px-Neovim-mark.svg.png"},
        {name:"Docker", imgUrl:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"},
        {name:"Kubernetes", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png"},
        {name:"FFmpeg", imgUrl:"https://img.icons8.com/?size=512&id=32418&format=png"},
        {name:"Nginx", imgUrl:"https://www.svgrepo.com/show/373924/nginx.svg"},
        {name:"PostgreSQL", imgUrl:"https://user-images.githubusercontent.com/24623425/36042969-f87531d4-0d8a-11e8-9dee-e87ab8c6a9e3.png"},
        {name:"WSL", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Windows_Subsystem_for_Linux_logo.png/250px-Windows_Subsystem_for_Linux_logo.png"},
        {name:"Jira", imgUrl:"https://cdn.worldvectorlogo.com/logos/jira-1.svg"},
        {name:"Github Actions", imgUrl:"https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"},
        {name:"Ollama", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeShWylhBDyM2zXYUZeB_qWE_G3Ehi4_WfQ&s"},
        {name:"AWS", imgUrl:"https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png"},
        {name:"Slack", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png"},
        {name:"Stripe", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42uI2JPTWjq_uNG9UFt98jnpHODVQrQHysg&s"},
        {name:"Tor", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Tor_Browser_icon.svg/2048px-Tor_Browser_icon.svg.png"}
    ]

    const frameworks: SkillModel[] = [
        {name:"Gin (Go)", imgUrl: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png"},
        {name:"Flask", imgUrl: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/flask-light.svg"},
        {name:"React", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"},
        {name:"Vite", imgUrl: "https://vitejs.fr/logo-with-shadow.png"},
        {name:"Pandas", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/449px-Pandas_mark.svg.png"},
        {name:"Django", imgUrl: "https://www.svgrepo.com/show/353657/django-icon.svg"},
        {name:"PyTorch", imgUrl: "https://static-00.iconduck.com/assets.00/pytorch-icon-1694x2048-jgwjy3ne.png"},
        {name:"Symfony", imgUrl: "https://img.icons8.com/?size=512&id=78295&format=png"},
        {name:"Express.js", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"},
        {name:"Socket.IO", imgUrl:"https://socket.io/images/logo-dark.svg"},
        {name:"Shadcn", imgUrl: "https://avatars.githubusercontent.com/u/139895814?v=4"},
        {name:"Tailwind", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"},
    ]
    
    return (
        <>
        <Heading size="8">Mes compétences</Heading>

        
        <Heading size="6">Langages de Programmation</Heading>

        <SkillGrid
        skills={languageSkills}
        />
        

        <Heading size="6">Frameworks</Heading>
        <SkillGrid
        skills={frameworks}
        />

        <Heading size="6">Outils</Heading>
        <SkillGrid
        skills={toolSkills}
        />


        </>
    );
}