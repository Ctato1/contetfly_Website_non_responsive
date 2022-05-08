// const leftArrow = document.querySelector('.fa-arrow-left')
// const rightArrow = document.querySelector('.fa-arrow-right')
// const local = document.querySelector('.join-js-local')




// var arr = [{
//     img1: "images/opencare.png",
//     nameText1: "Alycia Harris",
//     profesion1: "Growth Marketing Specialist",
//     profName1: "Opencare",
//     profDesc1: "ContentFly takes care of the whole copywriting process end to end. They've been great at helping us get our larger pipeline of content out quickly.",
//     },

//     {
//         img1: "images/glen.jpg",
//         nameText1: "Glenn Paquette",
//         profesion1: "Chief Executive Officer",
//         profName1: "Atomic Digital Agency",
//         profDesc1: "With ContentFly, we found a risk-free solution for high-quality content. If there is ever any issue with the writing, the team is quick to provide revisions, and even find a new writer if it's really not a good fit.",
//     },
//     {
//         img1: "images/nextglen.jpg",
//         nameText1: "JR Farr",
//         profesion1: "Chief Executive Officer",
//         profName1: "Weav",
//         profDesc1: "What I appreciate the most about ContentFly is all the research they provide for the content they produce.",
//     },
//     {
//         img1: "images/nicole.jpg",
//         nameText1: "Nicole Parmar",
//         profesion1: "Managing Partner",
//         profName1: "JNJ Business Strategies",
//         profDesc1: "ContentFly provides the writing to my thoughts so I am able to keep up with SEO, thought leadership and speaking engagements. It's been a life saver.",
//     },

//     {
//         img1: "images/christ.jpg",
//         nameText1: "Christian Velitchkov",
//         profesion1: "Chief Executive Officer",
//         profName1: "Twiz Media",
//         profDesc1: "Thanks to ContentFly, we've been able to validate certain strategies that provided great keyword indexation and traffic to our clients.",
//     },

// ]



// let curPageIndex = 0;


// rightArrow.addEventListener('click', () =>{
//     curPageIndex++
//     if(curPageIndex >= arr.length){
//         local.innerHTML = curPageIndex = 0
//     }
//     local.innerHTML = '<div class="join-js-local-img"><img src="' + arr[curPageIndex].img1 + '" alt="Image"><p>' + arr[curPageIndex].nameText1 + '</p><p>' + arr[curPageIndex].profesion1 + '</p></div><div class="join-js-local-texts"><h3>' + arr[curPageIndex].profName1 + '</h3><p>' + arr[curPageIndex].profDesc1 + '</p></div>'
//     console.log(curPageIndex)
//     return curPageIndex
// })


// leftArrow.addEventListener('click', () =>{
//     curPageIndex--
//     console.log(curPageIndex)
//     if(curPageIndex >= arr.length){
//         local.innerHTML = curPageIndex = arr.length
//         console.log(curPageIndex)
//     }
//     local.innerHTML = '<div class="join-js-local-img"><img src="' + arr[curPageIndex].img1 + '" alt="Image"><p>' + arr[curPageIndex].nameText1 + '</p><p>' + arr[curPageIndex].profesion1 + '</p></div><div class="join-js-local-texts"><h3>' + arr[curPageIndex].profName1 + '</h3><p>' + arr[curPageIndex].profDesc1 + '</p></div>'
// })

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


// shemocmeba rom problema ar moxdes da ar gacdes zgvars
// parametrebitaa da gamoiyeneba sxva da sxva masivis shemtxvevashi
// abrunebs trues tu shesadzlebelia gadasvla shemdegze(marjvniv marcxniv)
// abrunebs false tu imave bijze darcha an ukve pirvelze an bolo pagezea 
function checkSiblingPage(arrIndex, siblingOffset, fullPagesCount) {
    if (0 === siblingOffset) {
        return false;
    }
    const nextValue = arrIndex + siblingOffset;

    return (siblingOffset > 0) ? nextValue < fullPagesCount : nextValue > -1;
}

// radgan teksti erti da igivea amogeba tekstis masividan indexis mixedvit

function currentPageInnerHtml(arrIndex, arr) {
    return `<div class="join-js-local-img">
				<img src="${arr[arrIndex].img1}" alt="Image">
				<p>${arr[arrIndex].nameText1}</p>
				<p>${arr[arrIndex].profesion1}</p>
			</div>
			<div class="join-js-local-texts">
				<h3>${arr[arrIndex].profName1}</h3>
				<p>${arr[arrIndex].profDesc1}</p>
			</div>`;
}

// mteli procedura
function action(curPage, nextPageOffset, nodeEl) {
    // shemocmeba rom ar gacdes bolos
    if (checkSiblingPage(curPage, nextPageOffset, arr.length)) {
        // tu rigzea gavzardot biji 
        curPage += nextPageOffset;
        // mivanichod teksti
        nodeEl.innerHTML = currentPageInnerHtml(curPage, arr);
    }
    // davabrunod amjamindeli paigi
    return curPage;
}

let curPageIndex = 0;
rightArrow.addEventListener('click', () => {
    curPageIndex = action(curPageIndex, 1, local)
})
leftArrow.addEventListener('click', () => {
    curPageIndex = action(curPageIndex, -1, local)
})






































// const leftArrow = document.querySelector('.fa-arrow-left')
// const rightArrow = document.querySelector('.fa-arrow-right')
// const local = document.querySelector('.join-js-local')

// // radgan teksti erti da igivea amogeba tekstis masividan indexis mixedvit
// function currentPageInnerHtml(arrIndex, arr){
// 	return `<div class="join-js-local-img">
// 				<img src="${arr[arrIndex].nameText1}" alt="Image">
// 				<p>${arr[arrIndex].nameText1}</p>
// 				<p>${arr[arrIndex].profesion1}</p>
// 			</div>
// 			<div class="join-js-local-texts">
// 				<h3>${arr[arrIndex].profName1}</h3>
// 				<p>${arr[arrIndex].profDesc1}</p>
// 			</div>`;
// }

// // shemdegi paigis ageba 
// function getSiblingPage(curPage, siblingOffset, fullPagesCount){
// 	if(0 === siblingOffset){
// 		return curPage;
// 	}
// 	curPage = arrIndex + siblingOffset;
// 	if(curPage < 0){
// 		curPage = fullPagesCount - 1;
// 	}
// 	else if(curPage >= fullPagesCount){
// 		curPage = 0;
// 	}
// 	return curPage;
// }
// // mteli procedura
// function action(curPage,nextPageOffset, nodeEl){
// 	curPage = getSiblingPage(curPage, nextPageOffset ,arr.length );
// 	nodeEl.innerHTML = currentPageInnerHtml(curPage,arr);
// 	return curPage;
// }

// let curPageIndex = 0;
// rightArrow.addEventListener('click', ()=>{curPageIndex = action(curPageIndex, 1, local))}
// leftArrow.addEventListener('click', ()=>{curPageIndex = action(curPageIndex, -1, local))}