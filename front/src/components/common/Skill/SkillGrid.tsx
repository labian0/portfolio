import { Flex } from "@radix-ui/themes";
import { Skill } from "./Skill";
import { SkillModel } from "../../../model/Skill";

export const SkillGrid = ({skills}: {skills: SkillModel[]}) => {
    return (
        <>
        <Flex wrap="wrap" maxWidth="48rem" gap="2" justify="center">
            {skills.map((skill) => <Skill name={skill.name} imgUrl={skill.imgUrl}/>)}
            
        </Flex>
        </>
    );
}