import { Flex } from "@radix-ui/themes";
import { Skill } from "./Skill";

export const SkillGrid = () => {
    return (
        <>
        <Flex wrap="wrap" maxWidth="100%" gap="2">
            <Skill name="Java" imgUrl="https://img.icons8.com/color/512/java-coffee-cup-logo.png"/>
            <Skill name="Java" imgUrl="https://img.icons8.com/color/512/java-coffee-cup-logo.png"/>
            <Skill name="Java" imgUrl="https://img.icons8.com/color/512/java-coffee-cup-logo.png"/>
            <Skill name="Java" imgUrl="https://img.icons8.com/color/512/java-coffee-cup-logo.png"/>
            <Skill name="Java" imgUrl="https://img.icons8.com/color/512/java-coffee-cup-logo.png"/>
            <Skill name="Java" imgUrl="https://img.icons8.com/color/512/java-coffee-cup-logo.png"/>
            <Skill name="Java" imgUrl="https://img.icons8.com/color/512/java-coffee-cup-logo.png"/>
            <Skill name="Java" imgUrl="https://img.icons8.com/color/512/java-coffee-cup-logo.png"/>
        </Flex>
        </>
    );
}