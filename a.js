var arr = [{
        img1: "images/opencare.png",
        nameText1: "Alycia Harris",
        profesion1: "Growth Marketing Specialist",
        profName1: "Opencare",
        profDesc1: "ContentFly takes care of the whole copywriting process end to end. They've been great at helping us get our larger pipeline of content out quickly.",
    },

    {
        img1: "images/glen.jpg",
        nameText1: "Glenn Paquette",
        profesion1: "Chief Executive Officer",
        profName1: "Atomic Digital Agency",
        profDesc1: "With ContentFly, we found a risk-free solution for high-quality content. If there is ever any issue with the writing, the team is quick to provide revisions, and even find a new writer if it's really not a good fit.",
    },
    {
        img1: "images/nextglen.jpg",
        nameText1: "JR Farr",
        profesion1: "Chief Executive Officer",
        profName1: "Weav",
        profDesc1: "What I appreciate the most about ContentFly is all the research they provide for the content they produce.",
    },
    {
        img1: "images/nicole.jpg",
        nameText1: "Nicole Parmar",
        profesion1: "Managing Partner",
        profName1: "JNJ Business Strategies",
        profDesc1: "ContentFly provides the writing to my thoughts so I am able to keep up with SEO, thought leadership and speaking engagements. It's been a life saver.",
    },

    {
        img1: "images/christ.jpg",
        nameText1: "Christian Velitchkov",
        profesion1: "Chief Executive Officer",
        profName1: "Twiz Media",
        profDesc1: "Thanks to ContentFly, we've been able to validate certain strategies that provided great keyword indexation and traffic to our clients.",
    },

]


const leftArrow = document.querySelector('.fa-arrow-left')
const rightArrow = document.querySelector('.fa-arrow-right')
const local = document.querySelector('.join-js-local')




function currentPageInnerHtml(arrIndex, arr) {
    return `<div class="join-js-loval-img">
    <img src="${arr[arrIndex].img1}"> alt="Image">
    <p>${arr[arrIndex]}</p>
    `
}