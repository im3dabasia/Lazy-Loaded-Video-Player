import { convertHtmlCollectionstoArray, observeAllElements } from './Utils/functions.js';

const advertisementSlots = document.getElementsByClassName("video-advertisment");
const advertisementSlots_Array = convertHtmlCollectionstoArray(advertisementSlots);

//  Observer to Advertisement Video Slots
const advertisementVideoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-video-advertisment", entry.isIntersecting)
        if (entry.isIntersecting) {
            advertisementVideoObserver.unobserve(entry.target)
        }
    })
},
    {
        threshold: 0.5,
    }
)

observeAllElements(advertisementSlots_Array, advertisementVideoObserver);


const paragraphs = document.getElementsByClassName("para");
const paragraphs_Array = convertHtmlCollectionstoArray(paragraphs);

//  Observer to paragraphs in the Blog Article
const paraObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-para", entry.isIntersecting)
        if (entry.isIntersecting) {
            paraObserver.unobserve(entry.target)
        }
    })
},
    {
        threshold: 0.2,
    }
)

observeAllElements(paragraphs_Array, paraObserver);

/*
    Method used to achieve feature: Intersection Observer WEB API
    DATE:01/03/2023
*/