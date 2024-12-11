import type { sectionsDisplayObject } from "./sectionDisplay_interface";

const homePageSectionData: sectionsDisplayObject[] = [{
    title: "What We Do",
    content: "Throughout the year, the team develops a number of different skills as members research, design, and build the robot. Other members learn the skills of team management, financial responsibilities, and public relations. But most importantly, everyone gains the skills of professionalism that prepares them for their future work.",
    image: "./src/assets/images/slanted_rover_image_1.png",
    imageResponsive: "./src/assets/images/rover_image_1.png"

}, {
    title: "Meet the Team",
    content: "The team is composed of five major sub-teams including mechanical team responsible for building and designing the robot, electrical team responsible for properly wiring the up whilst working closely with the mechanical team, software team responsible for making the robot function through autonomous or through teleoperated controls, financial team is responsible for keeping the team logistically functional and securing funding, outreach team responsible for advertising TrickFire to the world through advertisements, social media, or through community participation.",
    image: "./src/assets/images/slanted_team_photo_rmc_2017.png",
    imageResponsive: "./src/assets/images/unslanted_team_photo_rmc_2017.jpg"
},
{
    title: "How to Join",
    content: "We accept everyone and anyone who wants to join the team. As long as you have the will to learn, you will succeed. To join, simply fill out a form and we will get back to you. ",
    image: "./src/assets/images/slanted_teaching_new_member.png",
    imageResponsive: "./src/assets/images/unslanted_teaching_new_member.jpg",
    linkName: "Join Us Here",
    link: './components/join_us.html'
}
];
homePageSectionData.forEach((section, index) => {
    section.order = index % 2 == 0 ? 0 : 1;
    section.imageOrder = index % 2 == 0 ? 'left' : 'right';
    section.contentOrder = index % 2 == 0 ? 'right' : 'left';
    return section
})

export { homePageSectionData }