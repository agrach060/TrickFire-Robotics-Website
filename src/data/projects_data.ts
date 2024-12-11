import type { sectionsDisplayObject } from "./sectionDisplay_interface";

const projectsSectionData: sectionsDisplayObject[] = [{
    title: "Houdini",
    content: "Houdini, the most recent build, is the third iteration of the excavator, dump, trunk, and tread design.With NASA officially launching their Artemis program, the NASA Robotics Mining Competition has shifted its focus to Lunar mining.In response, our newest iteration is a third of its predecessors size, while being able to mine 20% deeper due to our redesign of the arms kinematics.",
    image: "./src/assets/images/slanted_houdini.png",
    imageResponsive: "./src/assets/images/unslanted_houdini.png"

}, {
    title: "Atlas",
    content: "Atlas is the second iteration of the excavator, dump, trunk, and tread design. Although the fundamental design is the same as Grimlock’s, the team completely overhaled the rover by adding in a reinforced carbon fiber frame, sailcloth dumping bin, and redesigning the drivetrain suspension.As a result, Atlas, with its light carbon fiber frame, now weighs in at 67 kilograms, a significant reduction to prior iterations.",
    image: "./src/assets/images/slanted_atlas.png",
    imageResponsive: "./src/assets/images/unslanted_atlas.png"
},
{
    title: "Grimlock",
    content: "Our first mars rover capable of mining past the powdery topsoil, and getting to the icy regolith thirty centimeters underneath. Grimlock boasted a fully dynamic digging arm with four degrees of freedom, similar to a classic excavator, with a dump truck style bin that was used to transport the mined regolith, and tank treads that can drive over any obstacle that could be thrown at it. With an all-aluminum chassis Grimlock weighed in at just shy of 80 kilograms.",
    image: "./src/assets/images/slanted_grimlock.png",
    imageResponsive: "./src/assets/images/unslanted_grimlock.png"
},
{
    title: "Daybreak",
    content: " Our entry into the world of extraterrestrial mining, Daybreak was a four wheeled drum digger capable of mining fifteen centimeters below the surface of Mars. The rover featured an all-aluminum frame weighing in at 71 kilograms.",
    image: "./src/assets/images/slanted_daybreak.png",
    imageResponsive: "./src/assets/images/unslanted_daybreak.png"
}
];
projectsSectionData.forEach((section) => {
    section.order = 0;
    section.imageOrder = 'left';
    section.contentOrder = 'right';
    return section
})

export { projectsSectionData }